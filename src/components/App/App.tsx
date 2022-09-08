import React, { useState, useMemo } from 'react';
import cn from 'classnames/bind';
import { ThemeContext, defaultContext } from '../../context';
import Header from '../Header';
import Grid from '../Grid';
import Footer from '../Footer';
import cards from '../../data/cardsMock';
import styles from './App.scss';

const App = () => {
  const [theme, setTheme] = useState(defaultContext.theme);
  const cx = cn.bind(styles);
  const themeToggler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const providerProps = useMemo(
    () => ({ theme, themeToggler }),
    [theme, themeToggler]
  );

  return (
    <ThemeContext.Provider value={providerProps}>
      <div className={cx('app')}>
        <Header />
        <Grid cards={cards} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
