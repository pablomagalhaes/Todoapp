import { NavigationActions } from 'react-navigation'
import AuthenticationService from '../../../services/authentication/AuthenticationService'
import {
  UPDATE_SIGN_IN_ERROR,
  UPDATE_SIGN_UP_ERROR,
  UPDATE_SIGN_IN_LOADING,
  UPDATE_SIGN_UP_LOADING,
  LOGOUT,
  LOGIN
} from './LoginTypes'

export const updateSignInError = (error = '') => ({
    type: UPDATE_SIGN_IN_ERROR,
    payload: error,
})

export const updateSignUpError = (error = '') => ({
  type: UPDATE_SIGN_UP_ERROR,
  payload: error,
})

const userLogout = () => ({
  type: LOGOUT,
})

const userLogin = (user) => ({
  type: LOGIN,
  payload: user,
})

export const rememberPassword = ({ email }) => {
  return async (dispatch) => {

  }
}

export const signIn = ({ email, password }, onSuccessSignIn) => {
  return async (dispatch) => {

    new AuthenticationService().signIn(email, password).then((user) => {
      dispatch(login(user))
      onSuccessSignIn()
    })
  }
}

export const signUp = ({ name, email, password, phone, bloodType }, onSuccessSignIn) => {
  return async (dispatch) => {
    new AuthenticationService().signUp(name, email, password, phone, bloodType).then((response) => {
      const { token, contribuinte } = response
      dispatch(login(contribuinte))
      onSuccessSignIn()
    })
  }
}

export const login = (user) => {
  return async (dispatch) => {

    dispatch(userLogin(user))
  }
}

export const logout = () => {
  return async (dispatch) => {
    dispatch(userLogout())
  }
}