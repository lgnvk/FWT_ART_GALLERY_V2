import React, { FC } from 'react';
import cn from 'classnames/bind';
import { useAppSelector } from '../../../store/hooks';
import Button from '../../UI/Button';
import { ReactComponent as Close } from '../../../assets/img/svg/CloseIcon.svg';
import { ReactComponent as ThemeDark } from '../../../assets/img/svg/ThemeSun.svg';
import { ReactComponent as ThemeLight } from '../../../assets/img/svg/ThemeMoon.svg';
import styles from './Menu.scss';

type MenuType = {
  menuActive: boolean;
  menuToggler: () => void;
  themeToggler: () => void;
};

const Menu: FC<MenuType> = ({ menuActive, menuToggler, themeToggler }) => {
  const cx = cn.bind(styles);
  const theme = useAppSelector((state) => state.theme);

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