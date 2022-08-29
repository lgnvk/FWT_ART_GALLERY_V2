import React, { useState, useMemo } from 'react';
import './App.scss';
import { ThemeContext, defaultContext } from '../../context';
import Header from '../Header';
import Grid from '../Grid';
import Footer from '../Footer';

const App = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const themeToggler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const providerProps = useMemo(
    () => ({ theme, themeToggler }),
    [theme, themeToggler]
  );

  return (
    <ThemeContext.Provider value={providerProps}>
      <div className="App">
        <Header />
        <Grid />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
