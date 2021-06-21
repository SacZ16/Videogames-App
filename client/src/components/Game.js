import React from 'react'
import { Link } from 'react-router-dom'
import style from './game.module.css'
export default function Game({name, background_image,genres, id,rating}) {
    return (
    <div className={style.molde2}>
        <div className={style.molde}>           
            <Link to={`/videogame/${id}`}><img className={style.imagen} src={background_image} alt="no hay imagen"></img></Link>
                    <div>
                    <div>
                    <div className={style.name}>  {name} </div>
                    <div className={style.generos}>
                    {genres.map((g)=> g.name ).join(' - ')}
                        </div>            
                    </div>                               
            </div>
    </div>
            <progress className={style.rating} id="file" max="5" value={rating}> {rating}%</progress>
              <p className={style.rating2}>{rating}</p>
              <Link className={style.decoration} to={`/videogame/${id}`}>
    <div className={style.circle}></div>
    </Link>
        </div>
    )
}