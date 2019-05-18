import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import Button from '../../../components/Button'
import Colors from '../../../assets/Colors'
import { connect } from 'react-redux';
import { FormSubmitType } from '../LoginEnums';
import SelectAccessForm from './SelectAccessForm'
import AccountSignInForm from './AccountSignInForm'
import AccountSignUpForm from './AccountSignUpForm'
import RememberPasswordForm from './RememberPasswordForm'
import * as LoginActions from '../LoginActions'

class MainLoginForm extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      credentials: {},
    }
  }

  onSubmitFacebookSignIn() {
    Alert.alert(' go to FACEBOOK')
  }

  _onSubmitSignInForm(credentials) {
    this.props.signIn(credentials, () => this.props.onFormSuccess())
  }

  _onSubmitSignUpForm(newUserCredentials) {
    this.props.signUp(newUserCredentials, () => this.props.onFormSuccess())
  }

  _onSubmitRememberPasswordForm(email) {
    this.props.rememberPassword(email)
  }

  renderCorrectFormBySubmitType(submitType) {
    const { onChangeSubmitType } = this.props
    switch (submitType) {
      case FormSubmitType.SELECTION:
        return (
          <SelectAccessForm
            onPressAccessMethod={onChangeSubmitType}
          />
        )
      case FormSubmitType.SIGNIN:
        return (
          <AccountSignInForm 
            onPressSubmitAccountSignInForm={(credentials) => this._onSubmitSignInForm(credentials)}
            onPressForgotPassword={() => onChangeSubmitType(FormSubmitType.REMEMBER_PASSWORD)}
          />
        )
      case FormSubmitType.SIGNUP:
        return (
          <AccountSignUpForm 
            onPressSubmitAccountSignUpForm={(newUserCredentials) => this._onSubmitSignUpForm(newUserCredentials)}
          />
        )
      case FormSubmitType.REMEMBER_PASSWORD:
        return (
          <RememberPasswordForm 
            onPressSubmitRememberPasswordForm={(email) => this._onSubmitRememberPasswordForm(email)}
          />
        )
      case FormSubmitType.FACEBOOK:
        this.onSubmitFacebookSignIn()
        return (<SelectAccessForm
          onPressAccessMethod={onChangeSubmitType}
        />)
      default:
        break;
    }
  }

  render() {
    const { submitType } = this.props

    return this.renderCorrectFormBySubmitType(submitType)
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  signIn: LoginActions.signIn,
  signUp: LoginActions.signUp,
  rememberPassword: LoginActions.rememberPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLoginForm);