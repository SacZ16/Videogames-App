import { Route } from 'react-router';
import './App.css';
import GameDetail from './components/GameDetail';
import Home from './components/Home'
import menu from './components/menu'
import Search from './components/Buscador'
import Games from './components/Games';
import Forms from './components/Form';
import About from './components/About';
import Landing from './components/landing';


function App() {
    return (
    <div className="App">
      <Route path ="/"  component={Search}/>
      <Route path ="/"    component={Home}/>
      <Route path ="/About" exact  component={About}/>
      <Route path ="/"   component={menu}/>
      <Route path ="/"  exact component={Landing}/>
      <Route path ="/Form"  exact component={Forms}/>
      <Route path ="/videogame/:id" exact component={GameDetail}/>
      <Route path ="/videogames/:page"  render={({match}) => <Games type={'search'} page={match.params.page}/>}/>
      
    </div>
  );
}

export default App;
