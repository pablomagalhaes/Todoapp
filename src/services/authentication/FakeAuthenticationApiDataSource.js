import { AsyncStorage } from 'react-native'
import AuthenticationConverter from './AuthenticationConverter'

const APALA_USER = '_apala_user'
const ACCESS_TOKEN = '_accessToken'

const signInResponse = {
  "token": "eyJhbGciOiJIUzI1NiJ9.cmFmYWVsc29hcmVzMDg5QHN5c3RlbWljLmNvbTE1MjcxNzA4NDMzMjc.TrvC4KyP25jHL8DIM0V-5ojvAyIwQEH2obT14r2GL_8",
  "usuario": {
    "id": "1cf633e7-569f-455d-8e0a-2fa50cac069b",
    "nome": "rafael",
    "email": "rafaelsoares089@systemic.com",
    "createdAt": "2018-05-24T14:07:08.907Z",
    "updatedAt": "2018-05-24T14:07:08.912Z"
  }
}

class FakeAuthenticationApiDataSource {

  signIn(email, password) {
    return new Promise(async (resolve, reject) => {
      const { token, usuario } = signInResponse
      const user = await new AuthenticationConverter().mapperUserResponseToEntity(usuario)
      this._saveUser(token, user)
      console.log('call fake signIn correctly', user)
      resolve(user)
    });
  }

  async _saveUser({ token, user }) {
    await AsyncStorage.setItem(ACCESS_TOKEN, token)
    await AsyncStorage.setItem(APALA_USER, user)
  }

  getUser() {
    return new Promise( async (resolve, reject) => {
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
    const newUser = new AuthenticationConverter().mapperNewUserRequest({ name, email, password, phone, bloodType })
    return new Promise(async (resolve, reject) => {
      const user = await new AuthenticationConverter().mapperUserResponseToEntity(newUser)
      const { token, usuario } = signInResponse
      this._saveUser(token, usuario)
      resolve({ token, contribuinte: usuario})
    })
  }
}

export default FakeAuthenticationApiDataSource;
