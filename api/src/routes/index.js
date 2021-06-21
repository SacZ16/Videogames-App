const { Router } = require('express');
const axios = require ('axios').default;
const {Videogame,Genre} = require('../db');
const cors = require('cors')
const {v4:uuid} = require ('uuid') 
require('dotenv').config();// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {apiKey} = process.env

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(cors())
router.get("/videogames?:name",(req,res)=>{
    let {name} = req.query;
    if(name !== undefined)
       {
        let llamadoAPI = (page) => {return axios.get(`https://api.rawg.io/api/games?search=${name}&page=${page}&key=${apiKey}&page_size=25` )}
        let llamadoDB = Videogame.findAll ({include: Genre});
        Promise.all([llamadoAPI(1), llamadoAPI(2), llamadoAPI(3),llamadoAPI(4),llamadoDB])
      .then(response=>{
           let [respo1,respo2,respo3,respo4,respodb] = response;
            let mezcla = respodb.concat(respo1.data.results,respo2.data.results,respo3.data.results,respo4.data.results)
            let respuestafinal= mezcla.map(g=>({
                id:g.id,
                background_image:g.background_image,
                name:g.name,
               genres:g.genres,
                rating:g.rating,
            }))
            res.send(respuestafinal)
        })
        .catch(error => res.status(500).json({error:'ups'}))
       }else{
        let llamadoAPI = (page) => {return axios.get(`https://api.rawg.io/api/games?page=${page}&key=${apiKey}&page_size=25` )}
        let llamadoDB = Videogame.findAll ({include: Genre});
        Promise.all([llamadoAPI(1), llamadoAPI(2), llamadoAPI(3),llamadoAPI(4),llamadoDB])
      .then(response=>{
           let [respo1,respo2,respo3,respo4,respodb] = response;
            let mezcla = respodb.concat(respo1.data.results,respo2.data.results,respo3.data.results,respo4.data.results)
            let respuestafinal= mezcla.map(g=>({
                id:g.id,
                background_image:g.background_image,
                name:g.name,
               genres:g.genres,
                rating:g.rating,
            }))
            res.send(respuestafinal)
        })
        .catch(error => res.status(500).json({error:'ups'}))
       }
})
//  router.get('/videogames', (req,res)=>{
    
//      let llamadoAPI = (page) => {return axios.get(`https://api.rawg.io/api/games?page=${page}&key=${apiKey}&page_size=25` )}
//      let llamadoDB = Videogame.findAll ({include: Genre});
//      Promise.all([llamadoAPI(1), llamadoAPI(2), llamadoAPI(3),llamadoAPI(4),llamadoDB])
//    .then(response=>{
//         let [respo1,respo2,respo3,respo4,respodb] = response;
//          let mezcla = respodb.concat(respo1.data.results,respo2.data.results,respo3.data.results,respo4.data.results)
//          let respuestafinal= mezcla.map(g=>({
//              id:g.id,
//              background_image:g.background_image,
//              name:g.name,
//             genres:g.genres,
//              rating:g.rating,
//          }))
//          res.send(respuestafinal)
//      })
//      .catch(error => res.status(500).json({error:'ups'}))       
    
// })

router.get('/videogame/:id', async (req,res)=>{
    try{
    const gamee = await Videogame.findByPk(req.params.id,{include: Genre})
    if(gamee){
        res.json(gamee)
    }
}
    catch(error){
    try{        
        const response= await axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=${apiKey}`)
        res.json(response.data)
    }catch(error){
        if (error.response?.status === 404){
            const game = games.find(game => game.id=== parseInt(req.params.id))
            if(game) return res.json(game)
            return res.sendStatus(404)
        }
        res.status(500).json({error: 'ups'})
    }
}
})
router.get('/genres', async(req,res)=>{
    const genredb = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`) 
   const genrecreate = await Promise.all(genredb.data.results.map(g=>{
        return Genre.findOrCreate({where:{
            name:g.name
        }
        })        
    }))
    res.json(genrecreate)
})

router.post('/addgame', async (req,res)=>{
    let {name,description_raw,released,rating,genres,platforms,background_image} = req.body;
    console.log(req.body)
    const gamee= await Videogame.create({
        id: uuid(),
        name,
        description_raw,
        platforms,
        released,
        rating:rating|| 0,
        background_image: background_image||"https://static.wixstatic.com/media/8bca3a_ccf60ae05d2649a5be9b2fb6da499f38~mv2.png/v1/fill/w_340,h_340,al_c,q_85,usm_0.66_1.00_0.01/gameicon.webp"
    })
    let generos;
  if (genres.length) {
    generos = await Promise.all(genres.map(genero => Genre.findByPk(genero)))
  } 
  if(generos) { await gamee.setGenres(generos) }
    res.status(200).json(gamee)
})


module.exports = router;
