import { createContext } from 'react';

export const themes = {
  light: {
    background: '#eee',
    textColor: '#000',
  },
  dark: {
    background: '#000',
    textColor: '#eee',
  },
};

export const ThemeContext = createContext({ theme: themes.light, toggleTheme: () => { } });

export default themes;
