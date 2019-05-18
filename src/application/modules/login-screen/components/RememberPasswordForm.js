import React, { PureComponent } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Button from '../../../components/Button'
import Colors from '../../../assets/Colors'



class RememberPasswordForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    }
  }

  _submitRememberPasswordForm() {
    const { onPressSubmitRememberPasswordForm } = this.props;
    const { email } = this.state
    onPressSubmitRememberPasswordForm(email)
  }

  render() {
    const { onPressForgotPassword } = this.props;

    return (
      <View style={styles.mainContainer}>

        <Text style={{ color: "white", fontWeight: 'bold', margin: 10, alignSelf: 'center' }}>Redefinir sua senha</Text>

        <Text style={{ color: "white", marginTop: 10, marginBottom: 10, alignSelf: 'center' }}>Digite seu email para enviarmos um link de redefinição de senha.</Text>

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

        <Button
          onPress={() => this._submitRememberPasswordForm()}
          text={"Enviar"}
          textColor={Colors.light_red}
        />

      </View>
    );
  }

}

const styles = {
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: "column",
    paddingTop: 10,
    paddingRight: 60,
    paddingLeft: 60
  }
};


export default RememberPasswordForm