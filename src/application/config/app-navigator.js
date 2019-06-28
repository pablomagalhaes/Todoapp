'use strict'
import React from 'react'
import { connect } from 'react-redux'
import HomeScreen from "../modules/home-screen/HomeScreen";
import LoginScreen from '../modules/login-screen/LoginScreen'
import { createAppContainer, createStackNavigator } from "react-navigation";
import MainTopBar from '../components/MainTopBar'

const routes = {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => null
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: MainTopBar
  }
};

const MainStackNavigator = createStackNavigator(routes);

const AppNavigatorContainer = createAppContainer(MainStackNavigator);

const mapStateToProps = (state) => {
  return {
    navigationState: state.generalStackNavigator,
  }
}

export default connect(mapStateToProps)(AppNavigatorContainer);