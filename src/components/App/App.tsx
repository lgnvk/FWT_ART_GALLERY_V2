import React, { useState, useMemo } from 'react';
import cn from 'classnames/bind';
import { ThemeContext, defaultContext } from '../../context';
import Layout from '../Layout';
import Grid from '../UI/Grid';
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
