import axios from 'axios'
import { SET_ALLGAMES, SET_GAME_DETAIL ,SET_GAMES,SUBMIT,BUSCARJUEGO,ORDEN} from './nombreaction'

export function getAllGames(){
    return (dispatch)=>{
        Promise.all ([axios.get('http://localhost:3001/videogames'),axios.get('http://localhost:3001/genres')])
        .then(response=>{
           dispatch({ type: SET_ALLGAMES, payload: {
               generos:response[1].data,
               games:response[0].data
                }})
            
       })
       
    }
}
export function getGames(name){
    return (dispatch)=>{
       axios.get('http://localhost:3001/videogames?name=' + name)
       .then(response=>{
           dispatch({ type: SET_GAMES, payload: response.data})
       })
    }
}
export function getGame(id){
    return (dispatch)=>{
       axios.get(`http://localhost:3001/videogame/${id}`)
       .then(response=>{
           dispatch({ type: SET_GAME_DETAIL, payload: response.data})
       }).catch(error=>{
           if(error.response?.status !==404) alert("algo salio mal")
           dispatch({type: SET_GAME_DETAIL,payload: null})
       })
    }
}
export function buscarjuego(nombre){
    return {
        type:BUSCARJUEGO,
        payload:nombre
    }
}
export default function submit(payload) {
    return { 
        type: SUBMIT, 
        payload: payload,
    }
  }
export function clearGame(){
    return { type: SET_GAME_DETAIL, payload: undefined
    }
}
export  function orden(orde){
    return{
        type:ORDEN,
        payload:orde
    }
}
