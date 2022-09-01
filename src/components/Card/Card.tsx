import React, { FC } from 'react';
import { Arrow } from '../svgs/index';
import './Card.scss';

type CardProps = {
  title: string;
  name: string;
  imgUrl: string;
  year: string;
};

const Card: FC<CardProps> = ({ title, imgUrl, name, year }) => {
  return (
    <div className="card">
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
