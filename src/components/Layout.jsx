import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ThemeContext, themes } from '../context';

function Layout() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme((prevState) => (prevState === themes.light ? themes.dark : themes.light));
  };

  const theme = useMemo(() => ({ theme: currentTheme, toggleTheme }), [currentTheme]);

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <main style={{ background: currentTheme.background, color: currentTheme.textColor }}>
        <Outlet />
      </main>
      <footer style={{ background: currentTheme.background, color: currentTheme.textColor }}>
        Footer
      </footer>
    </ThemeContext.Provider>
  );
}

export default Layout;
