import React, { FC } from 'react';
import cn from 'classnames/bind';
import { CardType } from '../../types/types';
import { ReactComponent as Arrow } from '../../assets/img/svg/Arrow.svg';
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
          <Arrow className={cx('card__arrow-item')} fill="var(--text-color)" />
        </div>
      </div>
    </div>
  );
};

export default Card;
