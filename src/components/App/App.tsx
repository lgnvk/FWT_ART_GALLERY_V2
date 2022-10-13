import React, { useState, useMemo } from 'react';
import cn from 'classnames/bind';
import Cookies from 'js-cookie';
import { ThemeContext } from '../../context';
import Layout from '../Layout';
import Grid from '../UI/Grid';
import cards from '../../data/cardsMock';
import styles from './App.scss';

const App = () => {
  const cx = cn.bind(styles);
  const getTheme = () => {
    const theme = Cookies.get('theme') || 'dark';
    return theme;
  };
  const [theme, setTheme] = useState(getTheme);

  const themeToggler = () => {
    const cookieTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(cookieTheme);
    Cookies.set('theme', cookieTheme);
  };
  const providerProps = useMemo(
    () => ({ theme, themeToggler }),
    [theme, themeToggler]
  );

  return (
    <ThemeContext.Provider value={providerProps}>
      <div className={cx('app')}>
        <Layout>
          <main className="app__grid">
            <Grid cards={cards} />
          </main>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
