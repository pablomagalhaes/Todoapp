'use strict'

import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import LoginReducer from '../modules/login-screen/LoginReducer'

const reducers = combineReducers({
  login: LoginReducer,
});

export default createStore(reducers, applyMiddleware(thunk))