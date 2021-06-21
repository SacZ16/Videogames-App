import React from 'react'
import { Link} from 'react-router-dom';
import "./menu.css"

function Home(){return (
    <div>
<Link to='/'><div class="logo"></div> </Link>
<div class="menu">
       <Link class="textdecoration" to='/videogames/1'><h1 class="textdecoration">MENU</h1></Link>
       <Link class="textdecoration" to='/Form'><h1 class="textdecoration">AGREGAR JUEGO</h1></Link>
       <Link class="textdecoration" to='/about' ><h1 class="textdecoration">ABOUT</h1></Link>
       <div class="cajita">x</div>
    </div>
</div>)
}export default Home