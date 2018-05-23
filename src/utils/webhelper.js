import { auth } from "../firebase";

const LOGIN_USER = "loginUser";

export const isUserLogin = () => {
  let isLogin = false;
  if (auth.currentUser === null) {
    isLogin = localStorage.getItem(LOGIN_USER) !== null ? true : false;
  } else {
    isLogin = true;
  }
  return isLogin;
};

export const setUserSession = token => {
  localStorage.setItem(LOGIN_USER, token);
};

export const removeUserSession = () => {
  localStorage.removeItem(LOGIN_USER);
};
