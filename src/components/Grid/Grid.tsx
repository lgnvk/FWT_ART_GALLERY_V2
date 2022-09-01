import React, { FC } from 'react';
import cards from '../../data/cardsMock';
import Card from '../Card';
import './Grid.scss';

type CardType = {
  id: number;
  title: string;
  name?: string;
  imgUrl: string;
  year: string;
};

type GridProps = {
  cards: CardType[];
};

const Grid: FC<GridProps> = () => {
  return (
    <div className="grid">
      {cards.map(({ id, imgUrl, title, name, year }) => {
        return (
          <div key={id} className="grid__item">
            <Card
              id={id}
              imgUrl={imgUrl}
              title={title}
              name={name}
              year={year}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
