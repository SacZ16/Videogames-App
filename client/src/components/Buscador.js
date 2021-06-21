import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import {buscarjuego, getGames} from '../actions/actions'
import style from './buscador.module.css'


function Search({buscarjuego}){
    const [input, setInput] = React.useState('')
    let history = useHistory();

    function onChange(e){
        setInput(
            e.target.value
        )
    }

    function onSubmit(e){
        e.preventDefault();
        buscarjuego(input.toUpperCase())
        history.push("/videogames/1");
        document.getElementById("searchInput").focus()
    }

    return(
        <div className={style.buscador}>

            <form className={style.buscador} onSubmit={onSubmit}>
                <input id="searchInput" type="text" onChange={onChange} value={input} placeholder="Search your game" className={style.buscador2}></input>
                <button className={style.boton}>Buscar</button>
            </form>
        </div>
    )
}

const mapDispatchToProps= (dispatch) =>{
    return{
        buscarjuego: (name) => dispatch(buscarjuego(name))
    }
}
export default connect(null, mapDispatchToProps)(Search)