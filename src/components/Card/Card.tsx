import React, { FC } from 'react';
import cn from 'classnames';
import './Card.scss';
import { Arrow } from '../svgs/index';

type CardProps = {
  title: string;
  name: string;
  imgUrl: string;
  year: string;
  className: string;
};

const Card: FC<CardProps> = ({ title, imgUrl, name, year, className }) => {
  const styles = cn('card', className);
  return (
    <div className={styles}>
      <img src={imgUrl} alt="Card" className="card__img" />
      <div className="card__info">
        <div className="card__title">{title}</div>
        <div>{name}</div>
        <div className="card__year">{year}</div>
        <div className="card__arrow">
          <Arrow className="card__arrow-item" />
        </div>
      </div>
    </div>
  );
};

export default Card;
