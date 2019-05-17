import React, { PureComponent} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Button from '../../../components/Button'
import Colors from '../../../assets/Colors'


 
class AccountSignInForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  _submitAccountSignInForm() {
    const { onPressSubmitAccountSignInForm } = this.props;
    const accessCredentials = this.state
    onPressSubmitAccountSignInForm(accessCredentials)
  }

  render() {
    const { onPressForgotPassword } = this.props;

    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={{ color: "white", marginBottom: 15 }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={email => this.setState({ email })}
          placeholder="Email"
          placeholderTextColor={"white"}
          underlineColorAndroid={"white"}
          value={this.state.email}
        />

        <TextInput
          style={{ color: "white", marginBottom: 20 }}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={password => this.setState({ password })}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor={"white"}
          underlineColorAndroid={"white"}
          value={this.state.password}
        />

        <Button
          onPress={() => this._submitAccountSignInForm()}
          text={"Entrar"}
          textColor={Colors.light_red}
        />

        <TouchableOpacity
          style={{ marginTop: 15, alignSelf: "center" }}
          onPress={onPressForgotPassword}
        >
          <Text style={{ color: "white" }}>Esqueceu a senha ?</Text>
        </TouchableOpacity>
      </View>
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


export default AccountSignInForm