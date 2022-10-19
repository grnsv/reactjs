import * as types from './actionTypes';
import { db } from '../../service/firebase';

export const loadingMessages = () => async (dispatch) => {
  dispatch({
    type: types.GET_MESSAGES_LOADING,
  });
};

export const errorMessages = (e) => async (dispatch) => {
  dispatch({
    type: types.GET_MESSAGES_ERROR,
    payload: e.toString(),
  });
};

export const getMessages = () => async (dispatch) => {
  try {
    dispatch(loadingMessages());
    db.child('messages').on('value', (snap) => {
      if (snap.val() !== null) {
        dispatch({
          type: types.GET_MESSAGES,
          payload: { ...snap.val() },
        });
      } else {
        dispatch({
          type: types.GET_MESSAGES,
          payload: {},
        });
      }
    });
  } catch (e) {
    dispatch(errorMessages(e));
  }
};
