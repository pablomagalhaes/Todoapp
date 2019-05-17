'use strict'
import React from 'react'
import { connect } from 'react-redux'
import HomeScreen from "../../home-screen/HomeScreen";
import LoginScreen from '../../login-screen/LoginScreen'
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Text, Image, TouchableOpacity } from 'react-native'

export const CONTRIBUITION_SCREEN = 'ContribuitionScreen'

const topToolbarConfiguration = ({ state, navigation }) => {
  return ({
    // title: 'Inicio',
    // tabBarLabel: 'Inicio',
    // headerRight: (<TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{ marginRight: 10 }}><Text>ENTRAR</Text></TouchableOpacity>),
    headerLeft: (<Image style={{ width: 70, height: 70, marginLeft: 15 }}
      source={{ uri: 'https://bitbucket-assetroot.s3.amazonaws.com/c/photos/2017/May/30/1504218987-2-projetoapala-avatar.png' }} />),
    titleStyle: { textAlign: 'center', alignSelf: 'center', marginRight: 56 },
  })
}

const routes = {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => null
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: topToolbarConfiguration
  }
};

const GeneralStackNavigator = createStackNavigator(routes);

const AppContainer = createAppContainer(GeneralStackNavigator);

const mapStateToProps = (state) => {
  return {
    navigationState: state.generalStackNavigator,
  }
}

export default connect(mapStateToProps)(AppContainer);