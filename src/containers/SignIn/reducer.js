import {
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_GOOGLE_SUCCESS,
  SIGN_IN_WITH_GOOGLE_FAILED,
  SIGN_IN_WITH_FACEBOOK,
  SIGN_IN_WITH_FACEBOOK_SUCCESS,
  SIGN_IN_WITH_FACEBOOK_FAILED
} from "./constants";

const INITIAL_STATE = {};

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_WITH_GOOGLE:
      return state;
    case SIGN_IN_WITH_GOOGLE_SUCCESS:
      return state;
    case SIGN_IN_WITH_GOOGLE_FAILED:
      return state;
    case SIGN_IN_WITH_FACEBOOK:
      return state;
    case SIGN_IN_WITH_FACEBOOK_SUCCESS:
      return state;
    case SIGN_IN_WITH_FACEBOOK_FAILED:
      return state;
    default:
      return state;
  }
}

export default sessionReducer;