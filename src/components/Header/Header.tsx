import React, { FC, useLayoutEffect, useContext, useState } from 'react';
import cn from 'classnames/bind';
import { ThemeContext } from '../../context';
import { ThemeType } from '../../types/types';
import { ReactComponent as Logo } from '../../assets/img/svg/Logo.svg';
import { ReactComponent as Burger } from '../../assets/img/svg/Burger.svg';
import { ReactComponent as ThemeDark } from '../../assets/img/svg/ThemeSun.svg';
import { ReactComponent as ThemeLight } from '../../assets/img/svg/ThemeMoon.svg';
import Menu from '../Modals/Menu';
import styles from './Header.scss';

const Header: FC = () => {
  const { theme, themeToggler } = useContext<ThemeType>(ThemeContext);
  const [menuActive, setMenu] = useState(false);
  const cx = cn.bind(styles);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const menuToggler = () => {
    setMenu(!menuActive);
  };

  return (
    <div className={cx('header')}>
      <nav className={cx('header__nav')}>
        <Logo className={cx('header__logo')} fill="var(--text-color)" />
        <div className={cx('header__wrapper')}>
          <button type="button" className={cx('header__button')}>
            Log in
          </button>
          <button type="button" className={cx('header__button')}>
            Sign up
          </button>
        </div>
      </nav>
      <div className={cx('header__button_round', 'invisible')}>
        {theme === 'dark' ? (
          <ThemeDark
            className={cx('header__button', 'header__button_theme')}
            onClick={themeToggler}
            fill="var(--text-color)"
          />
        ) : (
          <ThemeLight
            className={cx('header__button', 'header__button_theme')}
            onClick={themeToggler}
            fill="var(--text-color)"
          />
        )}
      </div>
      <Burger
        className={cx('header__burger')}
        onClick={menuToggler}
        fill="var(--text-color)"
      />
      <Menu menuToggler={menuToggler} menuActive={menuActive} />
    </div>
  );
};

export default Header;
