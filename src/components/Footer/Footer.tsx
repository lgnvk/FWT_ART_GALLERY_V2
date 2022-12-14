import React, { FC } from 'react';
import cn from 'classnames/bind';
import { ReactComponent as Vk } from '../../assets/img/svg/Vkontakte.svg';
import { ReactComponent as Facebook } from '../../assets/img/svg/Facebook.svg';
import { ReactComponent as Instagram } from '../../assets/img/svg/Instagram.svg';

import styles from './Footer.scss';

const Footer: FC = () => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('footer')}>
      <div className={cx('footer__wrapper')}>
        <div className={cx('footer__info')}>
          Проект реализован в рамках стажировки для Frontend-разработчиков от
          компании <span>Framework Team</span>
        </div>
        <div className={cx('footer__author')}>Константин Логинов, 2022</div>
      </div>

      <div className={cx('footer__socials')}>
        <Facebook
          className={cx('footer__social')}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="var(--text-color)"
        />
        <Instagram
          className={cx('footer__social')}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="var(--text-color)"
        />
        <Vk
          className={cx('footer__social')}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="var(--text-color)"
        />
      </div>
    </div>
  );
};

export default Footer;
