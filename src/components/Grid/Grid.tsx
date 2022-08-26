import React, { FC } from 'react';
import './Grid.scss';

type CardType = {
  id: number;
  title: string;
  name?: string;
  imgUrl: string;
  year?: string;
};

type GridProps = {
  cards: CardType[];
};

const Grid: FC<GridProps> = ({ cards }) => {
  return (
    <div className="grid">
      {cards.map(({ id, imgUrl, title, name, year }) => {
        return (
          <div key={id} className="grid__item">
            <div className="card">
              <img src={imgUrl} alt="Card" className="card__img" />
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
