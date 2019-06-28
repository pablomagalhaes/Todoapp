'use strict'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import LoginReducer from '../modules/login-screen/LoginReducer'

import HomeReducer from "../modules/home-screen/HomeReducer";

const reducers = combineReducers({
  home: HomeReducer,
  login: LoginReducer
});

export default createStore(reducers, applyMiddleware(thunk))