import { applyMiddleware, combineReducers, createStore } from 'redux';
import persistReducer from 'redux-persist/lib/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { chatsReducer } from './chat/chatsReducer';
import { messagesReducer } from './message/messagesReducer';

const config = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  messages: messagesReducer,
  chats: chatsReducer,
});

const persistedReducer = persistReducer(config, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persist = persistStore(store);
