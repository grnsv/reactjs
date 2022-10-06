import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import App from './components/App';

test('renders menu', () => {
  render(<Provider store={store}><App /></Provider>, { wrapper: BrowserRouter });
  const headerElement = screen.getByText(/home/i);
  expect(headerElement).toBeInTheDocument();
});
