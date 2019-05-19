import { NavigationActions } from 'react-navigation'
import AuthenticationService from '../../../services/authentication/AuthenticationService'
import SessionService from "../../../services/session/SessionService";

import {
  LOGOUT,
  UPDATE_USER_SESSION,
  UPDATE_API_REQUEST_LOADING,
  UPDATE_API_REQUEST_ERROR
} from "./LoginTypes";

const updateApiRequestError = (apiRequestError) => ({
  type: UPDATE_API_REQUEST_ERROR,
  payload: apiRequestError,
})

const isLoadingApiRequest = (isLoading) => ({
  type: UPDATE_API_REQUEST_LOADING,
  payload: isLoading,
})

const userLogout = () => ({
  type: LOGOUT,
})

const updateUserSession = (user) => ({
  type: UPDATE_USER_SESSION,
  payload: user,
})

export const signIn = ({ email, password }) => {
  return (dispatch) => {
    dispatch(updateApiRequestError(null));
    dispatch(isLoadingApiRequest(true));
    new AuthenticationService()
      .signIn(email, password)
      .then(user => {
        dispatch(updateUserSession(user));
        dispatch(isLoadingApiRequest(false));
        new SessionService().saveCurrentUserSession(user)
      })
      .catch(error => {
        dispatch(isLoadingApiRequest(false));
        dispatch(updateApiRequestError(error))
      });
  }
}

export const signUp = ({ name, email, password }) => {
  return (dispatch) => {
    dispatch(updateApiRequestError(null));
    dispatch(isLoadingApiRequest(true));
    new AuthenticationService()
      .signUp(name, email, password)
      .then(response => {
        console.log("signUp", response);
        dispatch(isLoadingApiRequest(false));
        // dispatch(updateUserSession(user));
      })
      .catch(error => {
        dispatch(isLoadingApiRequest(false));
        dispatch(updateApiRequestError(error));
      });
  }
}

export const cleanErrorAndLoading = () => {
  return async (dispatch) => {
    dispatch(isLoadingApiRequest(false));
    dispatch(updateApiRequestError(null));
  }
}