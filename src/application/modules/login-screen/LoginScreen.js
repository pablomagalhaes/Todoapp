'use strict'
import React, { PureComponent } from 'react'
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
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
            style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}
          >
            {this.showBackIcon(currentSubmitType)}
          </View>

          <Image
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              resizeMode: "stretch"
            }}
            source={mainLogo}
          />
        </View>

        <MainLoginForm
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

