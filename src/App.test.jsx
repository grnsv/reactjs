import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

test('renders menu', () => {
  render(<App />, { wrapper: BrowserRouter });
  const headerElement = screen.getByText(/home/i);
  expect(headerElement).toBeInTheDocument();
});
