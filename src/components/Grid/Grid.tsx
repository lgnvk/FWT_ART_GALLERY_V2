import React, { FC } from 'react';
import './Grid.scss';
import ICard from '../../types';

type GridProps = {
  cards: ICard[];
};

const Grid: FC<GridProps> = ({ cards }) => {
  return (
    <div className="grid">
      {cards.map(({ id, imgUrl, title, name, year }) => {
        return (
          <div key={id} className="grid__item">
            <div className="card">
              <img src={imgUrl} alt="smth" className="card__img" />
              <div className="card__info">
                <div className="card__title">{title}</div>
                <div>{name}</div>
                <div className="card__year">{year}</div>
                <div className="card__arrow">.</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
