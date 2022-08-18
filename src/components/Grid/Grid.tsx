import React, { FC } from 'react';
import './Grid.scss';
import ICard from '../../types';

interface GridProps {
  cards: ICard[];
}

const Grid: FC<GridProps> = ({ cards }) => {
  return (
    <div className="grid">
      {cards.map((card) => {return (
        <div key={card.id} className="grid__item">
          <div className="card">
            <img src={card.imgUrl} alt="smth" className="card__img" />
            <div className="card__info">
              <div className="card__title">{card.title}</div>
              <div>{card.name}</div>
              <div className="card__year">{card.year}</div>
              <div className="card__arrow">.</div>
            </div>
          </div>
        </div>
      )})}
    </div>
  );
};

export default Grid;
