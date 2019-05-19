import { API_ENVIROMENTS, BASE_URLS } from "./CONSTANTS";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

export const UID_ASYNCSTORAGE_KEY = "@uid_session";

var firebaseConfig = {
  apiKey: "AIzaSyCZI1c-y3lW8WL_LTXfP5f5h31LXUc5XnA",
  authDomain: "authtodoapp.firebaseapp.com",
  databaseURL: "https://authtodoapp.firebaseio.com",
  projectId: "authtodoapp",
  storageBucket: "authtodoapp.appspot.com",
  messagingSenderId: "66408663074",
  appId: "1:66408663074:web:74413413e68bb344"
};

class ApiDataSource {
  constructor(apiEnviroment) {
    this.USER_ID = AsyncStorage.getItem(UID_ASYNCSTORAGE_KEY);
    this.API_ENVIROMENT = apiEnviroment;
    
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  getBaseUrl() {
    const { LOCAL, STAGE, PROD } = API_ENVIROMENTS;

    const action = {
      LOCAL: () => BASE_URLS.LOCAL,
      STAGE: () => BASE_URLS.STAGE,
      PROD: () => BASE_URLS.PROD
    };

    return action[this.API_ENVIROMENT]();
  }
}

export default ApiDataSource;
