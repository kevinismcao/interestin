import { Link, Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import SplashOrHome from "./components/Generic";
import Navigation from "./components/Navigation";
import PinShow from "./components/Pins/PinShow";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        
        <Route exact path="/" component={SplashOrHome}/>
        <Route exact path="/pins/:pinId" component={PinShow}/>
      
      </Switch> 
    </div>
  );
}

export default App;