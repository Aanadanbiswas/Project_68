import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import FacebookScreen from "./screens/fb";
import InstagramScreen from "./screens/in";
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"

export default class App extends React.Component {
  render(){
    return (
      < AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FacebookScreen},
  Instagram: {screen: InstagramScreen}
})

const AppContainer = createAppContainer(TabNavigator)