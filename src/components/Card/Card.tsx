import React, { FC } from 'react';

import './Card.scss';

interface CardProps {
  title: string;
  name: string;
  imgUrl: string;
  year: string;
}

const Card: FC<CardProps> = ({ title, imgUrl, name, year }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt="smth" className="card__img" />
      <div className="card__info">
        <div className="card__title">{title}</div>
        <div>{name}</div>
        <div className="card__year">{year}</div>
        <div className="card__arrow">.</div>
      </div>
    </div>
  );
};

export default Card;
