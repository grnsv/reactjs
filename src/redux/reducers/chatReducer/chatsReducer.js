import { actionTypes } from '../../actionTypes';

/* eslint-disable import/prefer-default-export */
const initialState = {
  chats: [
    { name: 'Some chat', id: 1 },
    { name: 'Complicated discussion', id: 2 },
    { name: 'Descriptions and documentation', id: 3 },
  ],
};

// eslint-disable-next-line default-param-last
export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_CHAT:
      return {
        ...state,
        chats: state.chats.filter((message) => message.id !== action.payload),
      };
    case actionTypes.ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };
    default:
      return state;
  }
};
