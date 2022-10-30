/* eslint-disable import/prefer-default-export */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { chatsReducer } from './chat/chatsReducer';
import { firebaseReducer } from './firebase/firebaseReducer';
import { messagesReducer } from './message/messagesReducer';

const config = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  chats: chatsReducer,
  firebase: firebaseReducer,
  messages: messagesReducer,
});

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persist = persistStore(store);
