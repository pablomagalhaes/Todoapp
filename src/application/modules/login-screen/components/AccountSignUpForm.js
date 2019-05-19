import React, { PureComponent } from 'react'
import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView } from 'react-native'
import Button from '../../../components/Button'
import Colors from '../../../assets/Colors'

class AccountSignUpForm extends PureComponent{

  state = {
    name: "",
    email: "",
    password: "",
    phone: '',
    bloodType: ''
  }

  _onPressSignUp() {
    this.props.onPressSubmitAccountSignUpForm(this.state)
  }

  render() {

    return (
      <ScrollView
        style={styles.mainContainer}>

        <TextInput
          style={{ color: Colors.main_blue, marginBottom: 15 }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(name) => this.setState({ name })}
          placeholder="Nome"
          placeholderTextColor={Colors.main_blue}
          underlineColorAndroid={Colors.main_blue}
          value={this.state.name}
        />

        <TextInput
          style={{ color: Colors.main_blue, marginBottom: 15 }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          placeholderTextColor={Colors.main_blue}
          underlineColorAndroid={Colors.main_blue}
          value={this.state.email}
        />

        <TextInput
          style={{ color: Colors.main_blue, marginBottom: 20 }}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(password) => this.setState({ password })}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor={Colors.main_blue}
          underlineColorAndroid={Colors.main_blue}
          value={this.state.password}
        />

        <Button
          onPress={() => this._onPressSignUp()}
          text={'Cadastrar'}
          textColor={Colors.main_blue}
          style={{ marginBottom: 40}}
        />

      </ScrollView>
    );
  }
}

const styles = {
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1 ,
    flexDirection: 'column',
    paddingTop: 10,
    paddingRight: 60,
    paddingLeft: 60
  }
}


export default AccountSignUpForm