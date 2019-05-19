'use strict'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import LoginReducer from '../modules/login-screen/LoginReducer'
import SplashScreenReducer from "../modules/splash-screen/SplashScreenReducer";

const reducers = combineReducers({
  login: LoginReducer,
  splashScreen: SplashScreenReducer
});

export default createStore(reducers, applyMiddleware(thunk))