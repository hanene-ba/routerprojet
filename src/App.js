import React from 'react';
import Accueil from "./components/Accueil";
import Projets from "./components/Projets";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css"

function App () {
  return (
    <div className="App">
       <Router forceRefresh = {true}>
         
          <Navigation/> 
          <Switch>
            
            <Route path ="/Projets" exact component={Projets}/><Route path ="/" exact component={Accueil}/>
            <Route path ="/Projets/:slug" exact component={Projets}/>
            <Route path ="/Contact" exact component={Contact}/>
            <Route path ="/"  component={() => <div>Erreur 404</div>}/>
          </Switch>
           
       </Router>
    </div>
  );
}


export default App;
