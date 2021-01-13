import React from "react";
import { Router, Scene, Drawer } from "react-native-router-flux";
import HomePage from "../Components/HomePage/index";
import Register from "../Components/Register/register";
import Splash from "../assets/Splash";

function Routes() {
  return (
    <Router initialRouterName="Splash">
      <Scene key="root">
        <Scene
          key="home"
          name="Home"
          component={HomePage}
          title="Home"
          hideNavBar
        />
        <Scene
          key="register"
          component={Register}
          title="Register"
          hideNavBar
        />
        <Scene
          key="splash"
          component={Splash}
          initial={true}
          title="Splash"
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

export default Routes;
