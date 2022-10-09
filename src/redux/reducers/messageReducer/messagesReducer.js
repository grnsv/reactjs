import { actionTypes } from '../../actionTypes';

/* eslint-disable import/prefer-default-export */
const initialState = {
  messages: [
    {
      id: 1, author: 'Author1', text: 'Message1', chatId: 2,
    },
    {
      id: 2, author: 'Author2', text: 'Message2', chatId: 1,
    },
    {
      id: 3, author: 'Author3', text: 'Message3', chatId: 3,
    },
  ],
};

// eslint-disable-next-line default-param-last
export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.payload),
      };
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};
