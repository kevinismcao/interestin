import { Link, Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import SplashOrHome from "./components/Generic";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={SplashOrHome}/>
      </Switch> 
    </div>
  );
}

export default App;