import ApiDataSource, { USER_SESSION_ASYNCSTORAGE_KEY }  from '../ApiDataSource'
import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

class SessionLocalDataSource extends ApiDataSource {
  
  getCurrentUserSession() {
    return new Promise(async (resolve, reject) => {
      const user = await AsyncStorage.getItem(USER_SESSION_ASYNCSTORAGE_KEY);
      resolve(user);
    });
  }

  saveCurrentUserSession(user) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(USER_SESSION_ASYNCSTORAGE_KEY, user);
      console.log('saveCurrentUserSession', user);
      resolve();
    });
  }

  cleanCurrentUserSession() {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(USER_SESSION_ASYNCSTORAGE_KEY);
      resolve();
    });
  }
}

export default SessionLocalDataSource;