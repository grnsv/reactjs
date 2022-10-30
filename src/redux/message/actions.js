import { actionTypes } from './actionTypes';

export const loadingMessages = () => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_MESSAGES_LOADING,
  });
};

export const errorMessages = (e) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_MESSAGES_ERROR,
    payload: e.toString(),
  });
};

export const getMessages = () => async (dispatch) => {
  try {
    dispatch(loadingMessages());
    const response = await fetch('/data/messages.json');
    const data = await response.json();
    dispatch({
      type: actionTypes.GET_MESSAGES,
      payload: data,
    });
  } catch (e) {
    dispatch(errorMessages(e));
  }
};
