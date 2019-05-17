import axios from 'axios'
import ApiDataSource from '../ApiDataSource'
import DEFAULT_TIMEOUT from '../CONSTANTS'
import AuthenticationConverter from './AuthenticationConverter'

class AuthenticationApiDataSource extends ApiDataSource{

  signIn(email, password) {
    return new Promise(async (resolve, reject) => {
      return axios({
        method: "post",
        baseURL: this.getBaseUrl(),
        url: "/contribuinte/login",
        timeout: DEFAULT_TIMEOUT,
        data: {
          'email': email,
          'senha': password
        }
      }).then((response) => {
        const { token, usuario } = response
        const user = new AuthenticationConverter().mapperUserResponseToEntity(usuario)
        this._saveUser(token, user)
        resolve()
      })
    });
  }

  async saveUser(token, user) {
    await AsyncStorage.setItem(ACCESS_TOKEN, token)
    await AsyncStorage.setItem(APALA_USER, user)
  }

  getUser() {
    return new Promise(async (resolve, reject) => {
      const user = await AsyncStorage.getItem(APALA_USER)
      resolve(user);
    });
  }

  signOut() {
     return new Promise(async (resolve, reject) => {
      await AsyncStorage.removeItem(ACCESS_TOKEN)
      await AsyncStorage.removeItem(APALA_USER)
      resolve();
    });
  }

  signUp(name, email, password, phone, bloodType) {
    const newUser = new AuthenticationConverter().mapperNewUserRequest({ name, email, password, phone, bloodType})
    return new Promise((resolve, reject) => {
      return axios({
        method: "post",
        baseURL: this.getBaseUrl(),
        url: "/contribuinte/registrar",
        timeout: DEFAULT_TIMEOUT,
        data: newUser 
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      });
    })
  }
}

export default AuthenticationApiDataSource