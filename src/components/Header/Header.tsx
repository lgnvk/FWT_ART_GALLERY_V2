import React, { FC, useLayoutEffect, useContext } from 'react';
import './Header.scss';
import { ThemeContext } from '../../context';
import { Logo, Burger, ThemeDark, ThemeLight } from '../svgs';

const Header: FC<HTMLElement> = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div className="header">
      <Logo className="header__logo" />
      <div className="header__menu">
        <div className="header__buttons">
          <div className="header__wrapper">
            <button type="button" className="header__button">
              Log in
            </button>
            <button type="button" className="header__button">
              Sign up
            </button>
          </div>
          {theme === 'dark' ? (
            <ThemeDark
              className="header__button header__button_theme"
              onClick={themeToggler}
            />
          ) : (
            <ThemeLight
              className="header__button header__button_theme"
              onClick={themeToggler}
            />
          )}
        </div>
      </div>
      <button type="button" className="header__burger">
        <Burger />
      </button>
    </div>
  );
};

export default Header;
