'use strict'
import React from 'react'
import { Image, TouchableOpacity, Text } from "react-native";
import { mainLogo } from "../assets/Images";
import Colors from "../assets/Colors";

const MainTopBar = ({ state, navigation }) => {
  return {
    title: "TodoApp",
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={{ marginRight: 10 }}
      >
        <Text style={{ color: Colors.white }}>SAIR</Text>
      </TouchableOpacity>
    ),
    headerLeft: (
      <Image
        style={{ width: 40, height: 40, marginLeft: 15 }}
        source={mainLogo}
      />
    ),
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center",
      marginRight: 56,
      color: Colors.white
    },
    headerStyle: { backgroundColor: Colors.main_blue }
  };
}

export default MainTopBar