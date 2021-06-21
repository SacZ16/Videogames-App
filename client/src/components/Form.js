
import React, { useState } from "react";
import { connect } from "react-redux";
import submit from '../actions/actions.js'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getAllGames} from '../actions/actions';
import "./form.css"
const axios = require ('axios');    

export function Post(props){
    const [input,setInput]= useState({        
        name:"",
        description_raw:"",
        released: "",
        rating:"",
        platforms: [],
        genres : [],
        background_image:"",
    })
    const handleSubmit= function(e){      
        e.preventDefault();
        props.submit(input)
        setRender('Juego agregado')
        setInput({
        name:"",
        description_raw:"",
        released:"",
        rating:"",
        genres:[],
        platforms:[],
        background_image:"",      
        })
        alert("juego agregado")
    }
    

    
    const [render,setRender] = useState('');
    const handleInputChange=function(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const plataforma= function(evento){
        if(evento.target.checked){
            setInput({
                     ...input,
                      platforms:[...input.platforms,{platform:{name:evento.target.value}}]
                    })                    
        }else{
            setInput({
                ...input,
                 platforms:input.platforms.filter((p) => p.platform.name !== evento.target.value)
               })
        }
    }
    const generos= function(evento){
        if(evento.target.checked){
            setInput({
                     ...input,
                      genres:[...input.genres,evento.target.value]
                    })
        }else{
            setInput({
                ...input,
                 genres:input.genres.filter((ge) => ge !== evento.target.value)
               })
        }
    }
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllGames())
      },[dispatch])
    return (
        <div>
        <div>Agrega un juego</div>

        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>

            <div class="formulario1">

        <div class="formulario">
            <div>
                <label class="labelnombre">Nombre</label>
                    <input class="inputnombre" autoComplete='off' type='text' name='name' required onChange={handleInputChange} value={input.name} />
                    
            </div>
            <div>
                <label class="labeldesciprcion">Descripción</label>
                    <textarea class="inputdescripcion" autoComplete='off' type='file' required name='description_raw' onChange={handleInputChange} value={input.description_raw} />
                    <label class="labelgeneros">Géneros</label>
                    <div class="formulario2">

                    
                    <label class="cajaplataforma" for="checkbox2" >
                    <input type="checkbox" value="1" onChange={generos} id="checkbox2" class="inputcambio"></input>
                    <div class="cajacambio">
                    <p class="generos">Action</p>
                    </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox3" >
                <input type="checkbox" value="2" onChange={generos} id="checkbox3" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Indie</p>
                </div>
                    </label>
                    <label class="cajaplataforma"  for="checkbox4">
                <input type="checkbox" value="3" onChange={generos} id="checkbox4" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Adventure</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox5">
                <input type="checkbox" value="4" onChange={generos} id="checkbox5" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">RPG</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox6">
                <input type="checkbox" value="5" onChange={generos} id="checkbox6" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Strategy</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox7">
                <input type="checkbox" value="6" onChange={generos} id="checkbox7" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Shooter</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox8">
                <input type="checkbox" value="7" onChange={generos} id="checkbox8" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Casual</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox9">
                <input type="checkbox" value="8" onChange={generos} id="checkbox9" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Simulation</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox10">
                <input type="checkbox" value="9" onChange={generos} id="checkbox10" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Puzzle</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox11">
                <input type="checkbox" value="10" onChange={generos} id="checkbox11" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Arcade</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox12">
                <input type="checkbox" value="11" onChange={generos} id="checkbox12" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Racing</p>
                </div>
                    </label>
                    <label class="cajaplataforma" for="checkbox13">
                <input type="checkbox" value="12" onChange={generos} id="checkbox13" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Platformer</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox14">
                <input type="checkbox" value="13" onChange={generos} id="checkbox14" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Family</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox15">
                <input type="checkbox" value="14" onChange={generos} id="checkbox15" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Massively Multiplayer</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox16">
                <input type="checkbox" value="15" onChange={generos} id="checkbox16" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Fighting</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox17">
                <input type="checkbox" value="16" onChange={generos} id="checkbox17" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Sports</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox18">
                <input type="checkbox" value="17" onChange={generos} id="checkbox18" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Board Games</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox19">                        
                <input type="checkbox" value="18" onChange={generos} id="checkbox19" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Educational</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox20">
                <input type="checkbox" value="19" onChange={generos} id="checkbox20" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Card</p>
                </div>
                    </label>


                    </div>
                    
                
            </div>
            <div>
                <label class="labellanzamiento">Fecha de lanzamiento</label>
                    <input  class="inputlanzamiento" autoComplete='off' type='date'required name='released' onChange={handleInputChange} value={input.released} />
            </div>
            <div>
                <label class="labelimagen">imagen</label>
                    <input class="inputimagen" type='file' name='background_image' onChange={handleInputChange} value={input.background_image} />
            </div>
            <div>
                <label class="labelrating">Rating</label>
                    <input class="inputrating" autoComplete='off' type='number' step="0.01" max ="5" min ="0" name='rating' required placeholder="rating del 0 al 5"title="0-5" maxlength="1" pattern="[0-5]" id="rating" onChange={handleInputChange} value={input.rating} />
            </div>
            <div>
                    
            </div>
            <div>
                <label class="labelplataforma">Plataformas</label>                    
                    <div class="formulario3">
                        <label class="cajaplataforma" for="checkbox21">
                    <input type="checkbox" value="PC" onChange={plataforma} id="checkbox21" class="inputcambio"></input>
                    <div class="cajacambio">
                    <p class="generos">pc</p>
                     </div>     

                        </label>
                        <label class="cajaplataforma" for="checkbox22">
                <input type="checkbox" value="PlayStation" onChange={plataforma} id="checkbox22" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">PlayStation</p>
                </div>
                        </label>
                        <label class="cajaplataforma" for="checkbox23">
                <input type="checkbox" value="Xbox" onChange={plataforma} id="checkbox23" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Xbox</p>
                </div>
                        </label>
                    <label class="cajaplataforma" for="checkbox24">                        
                <input type="checkbox" value="iOS" onChange={plataforma} id="checkbox24" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">iOS</p>
                </div>
                    </label>
                    <label class="cajaplataforma" for="checkbox25">
                <input type="checkbox" value="Android" onChange={plataforma} id="checkbox25" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Android</p>
                </div>
                    </label>
                    <label class="cajaplataforma" for="checkbox26">
                <input type="checkbox" value="Apple Macintosh" onChange={plataforma} id="checkbox26" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Apple Macintosh</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox27">
                <input type="checkbox" value="Linux" onChange={plataforma} id="checkbox27" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Linux</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox28">
                <input type="checkbox" value="Nintendo" onChange={plataforma} id="checkbox28" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Nintendo</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox29">
                <input type="checkbox" value="Atari" onChange={plataforma} id="checkbox29" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Atari</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox30">
                <input type="checkbox" value="Commodore / Amiga" onChange={plataforma} id="checkbox30" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Commodore /Amiga</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox31">
                <input type="checkbox" value="SEGA" onChange={plataforma} id="checkbox31" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">SEGA</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox32">
                <input type="checkbox" value="3DO" onChange={plataforma} id="checkbox32" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">3DO</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox33">
                <input type="checkbox" value="Neo Geo" onChange={plataforma} id="checkbox33" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Neo Geo</p>
                </div>
                    </label>

                    <label class="cajaplataforma" for="checkbox34">
                <input type="checkbox" value="Web" onChange={plataforma} id="checkbox34" class="inputcambio"></input>
                <div class="cajacambio">
                    <p class="generos">Web</p>
                </div>
                    </label>
                    <div>
                    </div>
                    </div>
                        <input class="inputrating2" type="range" max ="5" min ="0" step="0.01" name='rating' id="rating" onChange={handleInputChange} value={input.rating} ></input>
       
       </div>
            <input class="boton" type='submit' value='Submit' id='submitbutton'></input>
            </div>
</div>
</div>
        </form>
        <script>

        </script>
    </div>
)
}
function mapStateToProps(state){
    return{
        submit:state.submit,
    };
}
function mapDispatchToProps(dispatch){
    return{
        submit:(obj)=>dispatch(submit(obj)),
        getAllGames:()=>getAllGames()
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post)