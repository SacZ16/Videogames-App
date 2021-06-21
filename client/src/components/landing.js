import React from 'react'
import { Link } from 'react-router-dom';
import style from './landing.module.css'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getAllGames} from '../actions/actions';

function Landing(){
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getAllGames())
    },[dispatch])

    return (
        <div className={style.fondo}>
                <img className={style.logo} src="logo.png" alt="no hay"></img>
            <h1 className={style.text}>BIENVENIDO</h1>
            <Link to='/videogames/1' className={style.text2}><h1 className={style.text2}>PRESS START</h1>
            </Link>        
        </div>
    )
}

export default Landing