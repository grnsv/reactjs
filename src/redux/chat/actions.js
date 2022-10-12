import { actionTypes } from './actionTypes';

export const loadingChats = () => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_CHATS_LOADING,
  });
};

export const errorChats = (e) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_CHATS_ERROR,
    payload: e.toString(),
  });
};

export const getChats = () => async (dispatch) => {
  try {
    dispatch(loadingChats());
    const response = await fetch('/data/chats.json');
    const data = await response.json();
    dispatch({
      type: actionTypes.GET_CHATS,
      payload: data,
    });
  } catch (e) {
    dispatch(errorChats(e));
  }
};
