import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Página inicial'
      }
    },
    Profile
  })
);

export default Routes;
