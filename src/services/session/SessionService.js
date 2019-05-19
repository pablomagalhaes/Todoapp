import ServiceDataSource from '../ServiceDataSource'
import SessionLocalDataSource from "./SessionLocalDataSource";

class SessionService extends ServiceDataSource {
  constructor() {
    super(null, SessionLocalDataSource);
  }

  getCurrentUserSession() {
    return this.datasource().getCurrentUserSession();
  }

  saveCurrentUserSession(user) {
    return this.datasource().saveCurrentUserSession(user);
  }

  cleanCurrentUserSession() {
    return this.datasource().cleanCurrentUserSession();
  }
}

export default SessionService