import SessionService from "../../../services/session/SessionService";

const userIsLogged = userIsLogged => ({
  type: "USER_IS_LOGGED",
  payload: userIsLogged
});

export const getCurrentUser = () => {
  return (dispatch) => {
    new SessionService().getCurrentUserSession().then(user => {
      if( user !== null)
        dispatch(userIsLogged(true));
      else
        dispatch(userIsLogged(false));
    }); 
  } 
};