import ApiDataSource from '../ApiDataSource'

export const UID_LOCALSTORAGE_KEY = 'uid'
export const REFRESH_TOKEN_LOCALSTORAGE_KEY = 'refresh_token'

class AuthenticationApiDataSource extends ApiDataSource {

  signIn(email, password) {
    return new Promise((resolve, reject) => {

    })
  }

  signUp(name, email, password) {
    return new Promise((resolve, reject) => {
      
      resolve()
    })
  }

}

export default AuthenticationApiDataSource