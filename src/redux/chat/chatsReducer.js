/* eslint-disable import/prefer-default-export */
import * as types from './actionTypes';

const initialState = {
  chats: {},
  loading: false,
  error: null,
};

const actionMap = new Map([
  [types.GET_CHATS_LOADING, (state) => ({
    ...state,
    loading: true,
  })],
  [types.GET_CHATS, (state, action) => ({
    ...state,
    chats: action.payload,
    loading: false,
  })],
  [types.GET_CHATS_ERROR, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  })],
  [types.DELETE_CHAT, (state, action) => ({
    ...state,
    chats: state.chats.filter((chat) => chat.id !== action.payload),
  })],
  [types.ADD_CHAT, (state, action) => ({
    ...state,
    chats: [...state.chats, action.payload],
  })],
]);

// eslint-disable-next-line default-param-last
export const chatsReducer = (state = initialState, action) => {
  const mappedAction = actionMap.get(action.type);
  return mappedAction ? mappedAction(state, action) : state;
};
