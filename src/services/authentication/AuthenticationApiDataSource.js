import ApiDataSource, { USER_SESSION_ASYNCSTORAGE_KEY }  from '../ApiDataSource'
import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

class AuthenticationApiDataSource extends ApiDataSource {

  signIn(email, password) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((snapshot) => {
          const { refreshToken, uid } = snapshot.user

          resolve({ refreshToken, uid });
        })
        .catch(function (error) {
          reject(error.message)
        });
    })
  }

  signUp(name, email, password) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((snapshot) => {
          const { refreshToken, uid } = snapshot.user
          var user = firebase.auth().currentUser;

          this.saveNewUserData(uid, name, email, "image_url")

          resolve(snapshot.user);
        })
        .catch(function (error) {
          reject(error.message)
        });
    })
  }

  saveNewUserData(userId, name, email, profileImageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture: profileImageUrl
    });
  }

}

export default AuthenticationApiDataSource