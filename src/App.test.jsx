import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
// import configureStore from 'redux-mock-store';
import { store } from './redux/configureStore';
import App from './components/App';
import Message from './components/Message';
import LoginPage from './pages/LoginPage';

jest.mock('firebase/compat/app', () => ({
  auth: jest.fn().mockReturnThis(),
  signInWithEmailAndPassword: jest.fn(),
  initializeApp: jest.fn().mockReturnThis(),
  database: jest.fn().mockReturnThis(),
  ref: jest.fn(),
}));

// const middlewares = [];
// const mockStore = configureStore(middlewares);
// const initialState = { firebase: { currentUser: null } };
// const store = mockStore(initialState);

describe('App', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('renders menu', () => {
    render(<Provider store={store}><App /></Provider>, { wrapper: BrowserRouter });
    const menuElement = screen.getByText(/about/i);
    expect(menuElement).toBeInTheDocument();
  });

  test('user can login', () => {
    render(<Provider store={store}><LoginPage /></Provider>, { wrapper: BrowserRouter });
    const email = 'user@example.com';
    const password = 'passwd';
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: email } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: password } });
    expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith(email, password);
  });

  test('renders message', () => {
    render(<Message id="1" author="Author" text="Text" handleDelete={() => { }} />);
    const headerElement = screen.getByText(/Author/);
    expect(headerElement).toBeInTheDocument();
  });
});
