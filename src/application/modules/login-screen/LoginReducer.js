import {
  UPDATE_SIGN_IN_ERROR,
  UPDATE_SIGN_UP_ERROR,
  UPDATE_SIGN_IN_LOADING,
  UPDATE_SIGN_UP_LOADING,
  LOGOUT,
  LOGIN
} from './LoginTypes'

export const initial = {
  signInError: '',
  signUpError: '',
  logged: false,
  signInLoading: false,
  signUpLoading: false,
  user: null
}

export default (state = initial, action) => {
  switch (action.type) {
    case UPDATE_SIGN_IN_ERROR:
      return { ...state, signInError: action.payload }
    case UPDATE_SIGN_UP_ERROR:
      return { ...state, signUpError: action.payload }
    case UPDATE_SIGN_IN_LOADING:
      return { ...state, signInLoading: action.payload }
    case UPDATE_SIGN_UP_LOADING:
      return { ...state, signUpLoading: action.payload }
    case LOGIN:
      return { ...state, user: action.payload }
    case LOGOUT:
      return initial
    default:
      return state
  }
}
