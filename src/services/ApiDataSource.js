import { API_ENVIROMENTS, BASE_URLS } from "./CONSTANTS";
import * as firebase from "firebase";

export const UID_ASYNCSTORAGE_KEY = "@uid_session";

var firebaseConfig = {
  apiKey: "AIzaSyD1iPysnO2dHHpTEnFBJsl_Q0xNCS5DIe0",
  authDomain: "todoapp-1e31a.firebaseapp.com",
  databaseURL: "https://todoapp-1e31a.firebaseio.com",
  projectId: "todoapp-1e31a",
  storageBucket: "",
  messagingSenderId: "970216455352",
  appId: "1:970216455352:web:4228c83f022503e2"
};


class ApiDataSource {
  constructor(apiEnviroment) {
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
