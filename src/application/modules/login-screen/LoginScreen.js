'use strict'
import React, { PureComponent } from 'react'

import { View, ScrollView, Image, Text, StyleSheet,  TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as LoginActions from './LoginActions'
import Colors from '../../assets/Colors'
import Button from '../../components/Button'
import { mainLogo } from '../../assets/Images'
import SVGImage from 'react-native-svg-image';
import { FormSubmitType } from './LoginEnums';
import MainLoginForm from './components/MainLoginForm'
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const styles = StyleSheet.create({
    smallWhite: {
    color: 'white',
    fontWeight: '200',
    fontSize: 20,
    alignSelf: "center"
  },
  bigWhite: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: "center",
    marginTop: 10
  },
  red: {
    color: 'red',
  },
});
class LoginScreen extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      currentSubmitType: FormSubmitType.SELECTION 
    }
  }

  goToAccessSelection() {
    this.updateSubmitType(FormSubmitType.SELECTION)
  }

  updateSubmitType(newSubmitType) {
    this.setState({ currentSubmitType: newSubmitType })
  }

  showBackIcon(currentSubmitType) {
    if (currentSubmitType != FormSubmitType.SELECTION) {
      return (
        <TouchableOpacity onPress={() => this.goToAccessSelection()}>
          <Ionicons name="md-arrow-back" size={30} color={Colors.white} />
        </TouchableOpacity>
      );
    }
  }

  render() {
    const { currentSubmitType } = this.state

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: Colors.main_blue }}>
          <View
            style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 50, marginTop: 30 }}
          >
            {this.showBackIcon(currentSubmitType)}
          </View>

          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              resizeMode: "stretch"
            }}
            source={mainLogo}
          />

        <View>
          <Text style={styles.bigWhite}>Todo App</Text>
          <Text style={styles.smallWhite}>Thiago Magalhães</Text>
        </View>
          
        </View>

        <MainLoginForm style={{ marginTop: 30 }}
          submitType={currentSubmitType}
          onChangeSubmitType={newSubmitType =>
            this.updateSubmitType(newSubmitType)
          }
          onFormSuccess={() => this.goToHome()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

