import React, { FC } from 'react';
import { Vk, Facebook, Instagram } from '../svgs';
import './Footer.scss';

const Footer: FC<HTMLElement> = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__info">
          Проект реализован в рамках стажировки для Frontend-разработчиков от
          компании <span>Framework Team</span>
        </div>
        <div className="footer__author">Константин Логинов, 2022</div>
      </div>

      <div className="footer__socials">
        <Facebook className="footer__social" />
        <Instagram className="footer__social" />
        <Vk className="footer__social" />
      </div>
    </div>
  );
};

export default Footer;
