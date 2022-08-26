import React, { FC } from 'react';
import './Header.scss';
import { Logo, Burger, ThemeDark } from '../svgs';

const Header: FC<HTMLElement> = () => {
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
          <ThemeDark className="header__button" />
        </div>
      </div>
      <button type="button" className="header__burger">
        <Burger />
      </button>
    </div>
  );
};

export default Header;
