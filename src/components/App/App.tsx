import React, { useState, useMemo } from 'react';
import { ThemeContext, defaultContext } from '../../context';
import Header from '../Header';
import Grid from '../Grid';
import Footer from '../Footer';
import cards from '../../data/cardsMock';
import './App.scss';

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
        <Grid cards={cards} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
