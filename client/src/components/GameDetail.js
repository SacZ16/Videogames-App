import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { clearGame, getAllGames } from '../actions/actions';
import {useParams} from 'react-router-dom'
import {getGame} from '../actions/actions'
import style  from './gamedetail.module.css'

export function GameDetail(){
    const dispatch = useDispatch();
  const gameDetail= useSelector ((state)=> state.gameDetail)

  const {id} = useParams()
  useEffect(()=>{
      dispatch(getGame(id))
      return () =>{
          dispatch(clearGame())
      }
  },[dispatch, id])
  return(
    <div>
        {gameDetail === undefined && <h1>cargando...</h1>}
        {gameDetail === null && <h1>juego no encontrado</h1>}
        {typeof gameDetail === "object" && (
          
        
          <div className={style.Container}>
          <div className={style.Container2}>
            x
          </div>
            <h1 className={style.Text2}>{gameDetail.name}</h1>
            <h3 className={style.Text3}>{gameDetail.released}</h3>            
            <img className={style.Img2} src={gameDetail.background_image}/>
            --
              <h4 className={style.Text4}>{gameDetail.description_raw}</h4>
            --
            <h3 className={style.Text3}>Géneros:</h3><h3 className={style.Text3}>{gameDetail.genres?.map((g)=> g.name ).join(' - ')}</h3>
            --
            <div></div>
            --
            <h1 className={style.Text3}>Plataformas:</h1><h1 className={style.Text3}>{gameDetail.platforms?.map((p) =>  p.platform?.name ).join(' - ')}</h1>
             --
              <p className={style.Text}>RATING:{gameDetail.rating}</p>
            <progress className={style.rating2} id="file" max="5" value={gameDetail.rating}> {gameDetail.rating}%</progress>
            
            
            
            </div>)}
    </div>

  )
}

export default GameDetail