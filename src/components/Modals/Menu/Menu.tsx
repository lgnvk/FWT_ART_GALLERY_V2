import React, { FC, useContext } from 'react';
import cn from 'classnames/bind';
import { ThemeContext } from '../../../context';
import { ThemeType } from '../../../types/types';
import { ReactComponent as Close } from '../../../assets/img/svg/CloseIcon.svg';
import { ReactComponent as ThemeDark } from '../../../assets/img/svg/ThemeSun.svg';
import { ReactComponent as ThemeLight } from '../../../assets/img/svg/ThemeMoon.svg';
import Button from '../../UI/Button';
import styles from './Menu.scss';

type MenuType = {
  menuActive: boolean;
  menuToggler: () => void;
};

const Menu: FC<MenuType> = ({ menuActive, menuToggler }) => {
  const { theme, themeToggler } = useContext<ThemeType>(ThemeContext);
  const cx = cn.bind(styles);

  return (
    <div
      className={cx('menu', {
        menuActive,
      })}
    >
      <div className={cx('menu__content')}>
        <div className={cx('menu__close')}>
          <Close fill="var(--text-color)" onClick={menuToggler} />
        </div>
        <div className={cx('menu__buttons')}>
          <button
            type="button"
            className={cx('menu__button-theme')}
            onClick={themeToggler}
          >
            <div className={cx('menu__button-round')}>
              {theme === 'dark' ? (
                <ThemeDark
                  fill="var(--text-color)"
                  className={cx('menu__button_dark')}
                />
              ) : (
                <ThemeLight
                  fill="var(--text-color)"
                  className={cx('menu__button_light')}
                />
              )}
            </div>

            <Button theme={theme} buttonType="outlined">
              {theme === 'dark' ? 'light mode' : 'dark mode'}
            </Button>
          </button>
          <button type="button" className={cx('menu__button-log-in')}>
            Log in
          </button>
          <button type="button" className={cx('menu__button-sign-up')}>
            Sign up
          </button>
        </div>
      </div>
      <div className={cx('menu__background')} />
    </div>
  );
};

export default Menu;
