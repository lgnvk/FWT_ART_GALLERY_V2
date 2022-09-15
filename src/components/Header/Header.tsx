import React, { FC, useLayoutEffect, useContext, useState } from 'react';
import cn from 'classnames/bind';
import { ThemeContext } from '../../context';
import { ThemeType } from '../../types/types';
import {ReactComponent as Logo} from '../../assets/img/svg/Logo.svg';
import {ReactComponent as Burger} from '../../assets/img/svg/Burger.svg';
import {ReactComponent as ThemeDark} from '../../assets/img/svg/ThemeSun.svg';
import {ReactComponent as ThemeLight} from '../../assets/img/svg/ThemeMoon.svg';
import {ReactComponent as Cross} from '../../assets/img/svg/CloseIcon.svg';
import Button from '../Button';
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
        <Logo
          className={cx('header__logo')}
          fill="var(--text-color)"
        />
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
            viewBox="0 0 20 20"
            height={20}
            width={20}
            fill="var(--text-color)"
          />
        ) : (
          <ThemeLight
            className={cx('header__button', 'header__button_theme')}
            onClick={themeToggler}
            viewBox="0 0 18 21"
            height={15}
            width={17}
            fill="var(--text-color)"
          />
        )}
      </div>
      {/* <Logo
        className={cx('header__logo')}
        fill="var(--text-color)"
        viewBox="0 0 39 15"
        width={39}
        height={15}
      />
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
                viewBox="0 0 20 20"
                height={20}
                width={20}
                fill="var(--text-color)"
              />
            ) : (
              <ThemeLight
                className={cx('header__button', 'header__button_theme')}
                onClick={themeToggler}
                viewBox="0 0 18 21"
                height={15}
                width={17}
                fill="var(--text-color)"
              />
            )}
          </div>
        </div>
      </div> */}
      <Burger
        className={cx('header__burger')}
        onClick={menuToggler}
        fill="var(--text-color)"
        width={24}
        height={18}
      />
      <div
        className={cx('header__modal', {
          header__modal_active: menuActive,
        })}
      >
        <div className={cx('header__modal-overlay')} />
        <div className={cx('header__modal-window')}>
          <Cross
            className={cx('header__modal-cross')}
            onClick={menuToggler}
            height={16}
            width={16}
            viewBox="0 0 16 16"
            fill="var(--text-color)"
          />
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
                    fill="var(--text-color)"
                    viewBox="0 0 20 20"
                    height={20}
                    width={20}
                  />
                ) : (
                  <ThemeLight
                    className={cx('header__button', 'header__button_theme')}
                    onClick={themeToggler}
                    viewBox="0 0 18 21"
                    height={15}
                    width={17}
                    fill="var(--text-color)"
                  />
                )}
              </div>
              <Button theme={theme} buttonType="outlined">
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
