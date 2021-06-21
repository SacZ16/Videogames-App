import React from 'react'
import Game from './Game'
import { NavLink } from 'react-router-dom'
import './games.css'
import style from './home.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { getAllGames, orden } from '../actions/actions';
import { Link } from 'react-router-dom';

function Games({ games, type, page}) {
    const dispatch = useDispatch();
  var games= useSelector (state=> state.gamesparamostrar)
  var generos= useSelector (state=> state.generos)
  
  useEffect(()=>{
    dispatch(getAllGames())
  },[dispatch])

  
    var itemsInPage = 15
    var gamesToRenderr
    return (
        <div>
        <div className={style.cajafiltro2}>
        <h1 className={style.text2}>FILTRAR</h1>
        </div>
        <div className={style.cajafiltro}>
        <Link to={`/videogames/1`} className={style.filterboton} onClick={()=>{
                dispatch(orden("default"))
              }
                
              }>Default </Link>
          {
            generos && generos.map(ge=>{
              return <Link  to={`/videogames/1`} className={style.filterboton} onClick={()=>{
                dispatch(orden(ge[0].name))
              }
                
              }>{ge[0].name} </Link>
            })
          }
        </div>
        <div className={style.cajaordenar2}>
           <Link  to={`/videogames/1`} className={style.filterboton} onClick={()=>{{
                       games.sort((a,b)=>{
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                        return 0
                    })
                }}}> de A-Z</Link>
           <Link  to={`/videogames/1`} className={style.filterboton}onClick={()=>{{
                       games.sort((a,b)=>{
                        if(a.name.toLowerCase() - b.name.toLowerCase()) return 1
                        if(a.name.toLowerCase() + b.name.toLowerCase()) return -1
                        return  0                    
                    })
                }}}> de Z-A</Link>
           <Link  to={`/videogames/1`} className={style.filterboton} onClick={()=>{{
                       games.sort((a,b)=>{
                        if(a.rating > b.rating) return 1
                        if(a.rating < b.rating) return -1
                        return  0                    
                    })
                }}}>Rating↓↑</Link>
           <Link  to={`/videogames/1`} className={style.filterboton} onClick={()=>{{
                       games.sort((a,b)=>{
                        if(b.rating > a.rating) return 1
                        if(b.rating < a.rating) return -1
                        return  0                    
                    })
                }}}>Rating↑↓</Link>
        </div>
        <div className={style.cajadeimagen}> 
        {type === 'search' &&         
        games && 
        (gamesToRenderr = games.slice(itemsInPage * (page - 1), (itemsInPage * (page - 1)) + itemsInPage)) &&
        gamesToRenderr.map(m => 
        <Game key={m.id} name={m.name} background_image={m.background_image} released={m.released} genres={m.genres} id={m.id} rating={m.rating} />)     
        }
        
        </div>
        <div className={style.cajaordenar}>
          <h1 className={style.text3}> ORDENAR</h1>
        </div>

        <div className={style.cajapaginado}>
        <div className={style.botonpaginado}>
          {gamesToRenderr && !gamesToRenderr.length && <p className={style.text9}>No se encontraron juegos, Presiona en DEFAULT para volver</p> }        
        {gamesToRenderr && gamesToRenderr.length  && gamesToRenderr[0].id !== games[0].id && <NavLink className='active' to={`/videogames/${parseInt(page) - 1}`}>{'Previous'}</NavLink>}
        </div>
        </div>
        <div className={style.cajapaginado2}>
        <div className={style.botonpaginado1}>
        {gamesToRenderr && gamesToRenderr.length  && gamesToRenderr[gamesToRenderr.length - 1].id !== games[games.length - 1].id && <NavLink className='actives' to={`/videogames/${parseInt(page) + 1}`}>{'Next'}</NavLink>}
        </div>
        </div>
        </div>
    )
}



export default (Games)