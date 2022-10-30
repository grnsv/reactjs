import { auth } from '../../service/firebase';
import {
  loginError, loginStart, loginSuccess,
  logoutError, logoutStart, logoutSuccess,
  registerError, registerStart, registerSuccess,
} from './actions';
import * as types from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  currentUser: null,
};

// eslint-disable-next-line default-param-last
export const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_ERROR:
    case types.LOGOUT_ERROR:
    case types.REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export const registerInitiate = (email, password, displayName) => (dispatch) => {
  dispatch(registerStart());
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      user.updateProfile({
        displayName,
      });
      dispatch(registerSuccess(user));
    })
    .catch((e) => dispatch(registerError(e)));
};

export const loginInitiate = (email, password) => (dispatch) => {
  dispatch(loginStart());
  auth
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => dispatch(loginSuccess(user)))
    .catch((e) => dispatch(loginError(e)));
};

export const logoutInitiate = () => (dispatch) => {
  dispatch(logoutStart());
  auth
    .signOut()
    .then(() => dispatch(logoutSuccess()))
    .catch((e) => dispatch(logoutError(e)));
};
