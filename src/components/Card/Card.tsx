import React, { FC } from 'react';
import cn from 'classnames';
import './Card.scss';

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
