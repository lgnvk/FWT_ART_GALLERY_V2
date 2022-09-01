import React, { FC } from 'react';
import cn from 'classnames/bind';
import Vk from '../svgs/VkIcon';
import Facebook from '../svgs/FacebookIcon';
import Instagram from '../svgs/InstagramIcon';

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
        <Facebook className={cx('footer__social')} />
        <Instagram className={cx('footer__social')} />
        <Vk className={cx('footer__social')} />
      </div>
    </div>
  );
};

export default Footer;
