import React, { FC } from 'react';
import cn from 'classnames/bind';
import { Arrow } from '../svgs/index';
import styles from './Card.scss';

type CardProps = {
  title: string;
  name: string;
  imgUrl: string;
  year: string;
};

const Card: FC<CardProps> = ({ title, imgUrl, name, year }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('card')}>
      <img src={imgUrl} alt="Card" className={cx('card__img')} />
      <div className={cx('card__info')}>
        <div className={cx('card__title')}>{title}</div>
        <div>{name}</div>
        <div className={cx('card__year')}>{year}</div>
        <div className={cx('card__arrow')}>
          <Arrow className={cx('card__arrow-item')} />
        </div>
      </div>
    </div>
  );
};

export default Card;
