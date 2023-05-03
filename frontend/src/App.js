import { Link, Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import SplashOrHome from "./components/Generic";
import Navigation from "./components/Navigation";
import PinShow from "./components/Pins/PinShow";
import PinCreateForm from "./components/Pins/PinCreateForm";
import UserShow from "./components/Users/UserShow";
import BoardShow from "./components/Boards/BoardShow";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/boards/:boardId" component={BoardShow}/>
        <Route exact path="/users/:userId" component={UserShow} />
        {/* <Route exact path="/users/:username" component={UserShow} /> */}
        <Route exact path="/pins/:pinId" component={PinShow}/>
        <Route path="/pin-builder" component={PinCreateForm}/>
        <Route path="/" component={SplashOrHome}/>
      </Switch> 
    </div>
  );
}

export default App;