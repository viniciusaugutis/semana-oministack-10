import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import { StyleSheet } from "react-native";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "Página inicial"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil no GitHub"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#FFF",
        headerStyle: {
          backgroundColor: "#7D40E7"
        }
      }
    }
  )
);

export default Routes;
