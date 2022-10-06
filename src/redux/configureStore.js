import { combineReducers, createStore } from 'redux';
import { chatsReducer } from './reducers/chatReducer/chatsReducer';
import { messagesReducer } from './reducers/messageReducer/messagesReducer';

export const reducer = combineReducers({
  messages: messagesReducer,
  chats: chatsReducer,
});

export const store = createStore(reducer);
