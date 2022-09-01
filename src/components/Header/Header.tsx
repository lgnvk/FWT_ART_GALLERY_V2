import React, { FC, useLayoutEffect, useContext, useState } from 'react';
import cn from 'classnames/bind';
import { ThemeContext } from '../../context';
import Logo from '../svgs/Logo';
import Burger from '../svgs/Burger';
import ThemeDark from '../svgs/ThemeDark';
import ThemeLight from '../svgs/ThemeLight';
import Cross from '../svgs/Cross';
import Button from '../Button';
import styles from './Header.scss';

const Header: FC = () => {
  const { theme, themeToggler } = useContext(ThemeContext);
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
      <Logo className={cx('header__logo')} />
      <div className={cx('header__menu')}>
        <div className={cx('header__buttons')}>
          <div className={cx('header__wrapper')}>
            <button type="button" className={cx('header__button')}>
              Log in
            </button>
            <button type="button" className={cx('header__button')}>
              Sign up
            </button>
          </div>
          <div className={cx('header__button_round')}>
            {theme === 'dark' ? (
              <ThemeDark
                className={cx('header__button', 'header__button_theme')}
                onClick={themeToggler}
              />
            ) : (
              <ThemeLight
                className={cx('header__button', 'header__button_theme')}
                onClick={themeToggler}
              />
            )}
          </div>
        </div>
      </div>
      <button type="button" className={cx('header__burger')}>
        <Burger onClick={menuToggler} />
      </button>
      <div
        className={cx('header__modal', {
          header__modal_active: menuActive,
        })}
      >
        <div className={cx('header__modal-overlay')} />
        <div className={cx('header__modal-window')}>
          <Cross className={cx('header__modal-cross')} onClick={menuToggler} />
          <div className={cx('header__modal-button')}>
            <button
              type="button"
              className={cx('header__modal-button_theme')}
              onClick={themeToggler}
            >
              <div className={cx('header__button_round')}>
                {theme === 'dark' ? (
                  <ThemeDark
                    className={cx('header__button', 'header__button_theme')}
                    onClick={themeToggler}
                  />
                ) : (
                  <ThemeLight
                    className={cx('header__button', 'header__button_theme')}
                    onClick={themeToggler}
                  />
                )}
              </div>
              <Button theme={theme}>
                {theme === 'dark' ? 'light mode' : 'dark mode'}
              </Button>
            </button>
          </div>
          <div
            className={cx('header__modal-button', 'header__modal-button_auth')}
          >
            LOG IN
          </div>
          <div
            className={cx('header__modal-button', 'header__modal-button_auth')}
          >
            SIGN UP
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
