/* eslint-disable import/prefer-default-export */
import * as types from './actionTypes';

const initialState = {
  messages: {},
  loading: false,
  error: null,
};

const actionMap = new Map([
  [types.GET_MESSAGES_LOADING, (state) => ({
    ...state,
    loading: true,
  })],
  [types.GET_MESSAGES, (state, action) => ({
    ...state,
    messages: action.payload,
    loading: false,
  })],
  [types.GET_MESSAGES_ERROR, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  })],
  [types.DELETE_MESSAGE, (state, action) => ({
    ...state,
    messages: state.messages.filter((message) => message.id !== action.payload),
  })],
  [types.ADD_MESSAGE, (state, action) => ({
    ...state,
    messages: [...state.messages, action.payload],
  })],
]);

// eslint-disable-next-line default-param-last
export const messagesReducer = (state = initialState, action) => {
  const mappedAction = actionMap.get(action.type);
  return mappedAction ? mappedAction(state, action) : state;
};
