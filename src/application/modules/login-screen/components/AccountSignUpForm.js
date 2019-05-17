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
          style={{ color: 'white', marginBottom: 15 }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(name) => this.setState({ name })}
          placeholder="Nome"
          placeholderTextColor={'white'}
          underlineColorAndroid={'white'}
          value={this.state.name}
        />

        <TextInput
          style={{ color: 'white', marginBottom: 15 }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email"
          placeholderTextColor={'white'}
          underlineColorAndroid={'white'}
          value={this.state.email}
        />

        <TextInput
          style={{ color: 'white', marginBottom: 20 }}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(password) => this.setState({ password })}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor={'white'}
          underlineColorAndroid={'white'}
          value={this.state.password}
        />

        <View style={{ flexDirection: 'row'}}>

          <TextInput
            style={{ color: 'white', marginBottom: 20, flex: 1 }}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(phone) => this.setState({ phone })}
            placeholder="Telefone"
            placeholderTextColor={'white'}
            underlineColorAndroid={'white'}
            value={this.state.phone}
          />

          <Picker
            selectedValue={this.state.bloodType}
            mode="dropdown"
            style={{ backgroundColor: 'white', color: 'black', marginBottom: 20, flex: 1, justifyContent: 'center' }}
            onValueChange={(bloodType) => this.setState({ bloodType })}>
            <Picker.Item label="O+" value="java" />
            <Picker.Item label="O-" value="js" />
            <Picker.Item label="A+" value="j32s" />
          </Picker>
          
        </View>

        <Button
          onPress={() => this._onPressSignUp()}
          text={'Cadastrar'}
          textColor={Colors.light_red}
          style={{ marginBottom: 40}}
        />

      </ScrollView>
    );
  }
}

const styles = {
  mainContainer: {
    backgroundColor: Colors.light_red,
    flex: 1 ,
    flexDirection: 'column',
    paddingTop: 10,
    paddingRight: 60,
    paddingLeft: 60
  }
}


export default AccountSignUpForm