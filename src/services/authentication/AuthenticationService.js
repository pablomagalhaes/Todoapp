import axios from "axios";
import ServiceDataSource from "../ServiceDataSource";
import FakeAuthenticationApiDataSource from "./FakeAuthenticationApiDataSource";
import AuthenticationApiDataSource from "./AuthenticationApiDataSource";

class AuthenticationService extends ServiceDataSource {
  constructor() {
    super(FakeAuthenticationApiDataSource, AuthenticationApiDataSource);
  }

  getUser() {
    return this.datasource().getUser();
  }

  saveUser(token, user) {
    return this.datasource().saveUser(token, user);
  }

  signIn(email, password) {
    return this.datasource().signIn(email, password);
  }

  signOut() {
    return this.datasource().signOut();
  }

  signUp(name, email, password, phone, bloodType) {
    return this.datasource().signUp(name, email, password, phone, bloodType);
  }
}

export default AuthenticationService;
