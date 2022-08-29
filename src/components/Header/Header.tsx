import React, { FC, useLayoutEffect, useContext, useState } from 'react';
import './Header.scss';
import cn from 'classnames';
import { ThemeContext } from '../../context';
import { Logo, Burger, ThemeDark, ThemeLight, Cross } from '../svgs';
import Button from '../Button';

const Header: FC<HTMLElement> = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
  const [menuActive, setMenu] = useState(false);
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const menuToggler = () => {
    setMenu(!menuActive);
  };
  const themeRound = cn({
    header__button_round: theme === 'dark' || theme === 'light',
  });
  const modal = cn('header__modal', {
    header__modal_active: menuActive,
  });
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
          <div className={themeRound}>
            {theme === 'dark' ? (
              <ThemeDark
                className="header__button header__button_theme"
                onClick={themeToggler}
              />
            ) : (
              <ThemeLight
                className="header__button header__button_theme header__button_theme-light"
                onClick={themeToggler}
              />
            )}
          </div>
        </div>
      </div>
      <button type="button" className="header__burger">
        <Burger onClick={menuToggler} />
      </button>
      <div className={modal}>
        <div className="header__modal-overlay" />
        <div className="header__modal-window">
          <Cross className="header__modal-cross" onClick={menuToggler} />
          <div className="header__modal-button">
            <button
              type="button"
              className="header__modal-button_theme"
              onClick={themeToggler}
            >
              <div className={themeRound}>
                {theme === 'dark' ? (
                  <ThemeDark
                    className="header__button header__button_theme"
                    onClick={themeToggler}
                  />
                ) : (
                  <ThemeLight
                    className="header__button header__button_theme header__button_theme-light"
                    onClick={themeToggler}
                  />
                )}
              </div>
              <Button theme={theme}>
                {theme === 'dark' ? 'light mode' : 'dark mode'}
              </Button>
            </button>
          </div>
          <div className="header__modal-button header__modal-button_auth">
            LOG IN
          </div>
          <div className="header__modal-button header__modal-button_auth">
            SIGN UP
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
