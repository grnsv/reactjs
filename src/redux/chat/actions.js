import * as types from './actionTypes';
import { db } from '../../service/firebase';

export const loadingChats = () => async (dispatch) => {
  dispatch({
    type: types.GET_CHATS_LOADING,
  });
};

export const errorChats = (e) => async (dispatch) => {
  dispatch({
    type: types.GET_CHATS_ERROR,
    payload: e.toString(),
  });
};

export const getChats = () => async (dispatch) => {
  try {
    dispatch(loadingChats());
    db.child('chats').on('value', (snap) => {
      if (snap.val() !== null) {
        dispatch({
          type: types.GET_CHATS,
          payload: { ...snap.val() },
        });
      } else {
        dispatch({
          type: types.GET_CHATS,
          payload: {},
        });
      }
    });
  } catch (e) {
    dispatch(errorChats(e));
  }
};
