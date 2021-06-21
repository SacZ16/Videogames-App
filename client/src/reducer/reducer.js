import axios from 'axios'
import {SET_GAMES, SET_ALLGAMES, SET_GAME_DETAIL,SUBMIT,BUSCARJUEGO,ORDEN} from '../actions/nombreaction'

const initialState={
    games: undefined,
    gameDetail: undefined,
    name:undefined,
    gamesparamostrar:undefined,
    generos:undefined,
}
function reducer(state=initialState,action){
    switch(action.type){
        case SET_GAMES:{

            return {
                ...state,
                gamesparamostrar:action.payload,
                games:action.payload
            }

        }
        case SET_GAME_DETAIL:{
            return{
                ...state,
                gameDetail: action.payload
            }
        }
        case SET_ALLGAMES:{
            return {
                ...state,
                generos:action.payload.generos,
                gamesparamostrar:action.payload.games,
                games:action.payload.games
            }
        }
        case SUBMIT:{
            axios.post('http://localhost:3001/addgame', action.payload)
            return{
                ...state,
                submit:'Juego agregado'
            }
        }
        case BUSCARJUEGO:{
                return{
                    ...state,
                    gamesparamostrar: state.games.filter((game)=>game.name.toUpperCase().includes(action.payload.toUpperCase()))
                }
        }
        case ORDEN:{
            if(action.payload === "default"){
                return{
                    ...state,
                    gamesparamostrar : [...state.games]
                }
            }
            return {
                ...state,
                gamesparamostrar: state.games.filter(gam => 
                    
                    {return gam.genres.find((gen)=> gen.name === action.payload)}
                    )
            }
        }
        default:{
            return state
        }
    }
}

export default reducer;