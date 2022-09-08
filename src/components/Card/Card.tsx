import React, { FC } from 'react';
import cn from 'classnames/bind';
import { CardType } from '../../types/types';
import Arrow from '../svgs/ArrowIcon';
import styles from './Card.scss';

const Card: FC<CardType> = ({ title, imgUrl, name, year, id }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('card')} key={id}>
      <img src={imgUrl} alt="Card" className={cx('card__img')} />
      <div className={cx('card__info')}>
        <div className={cx('card__title')}>{title}</div>
        <div>{name}</div>
        <div className={cx('card__year')}>{year}</div>
        <div className={cx('card__arrow')}>
          <Arrow
            className={cx('card__arrow-item')}
            viewBox="0 0 24 24"
            width="90%"
            height="100%"
            fill="var(--primary-light-gray)"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
