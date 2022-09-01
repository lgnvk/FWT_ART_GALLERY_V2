import React, { FC } from 'react';
import cn from 'classnames/bind';
import { CardType } from '../../types/types';
import Card from '../Card';
import styles from './Grid.scss';

type GridProps = {
  cards: CardType[];
};

const Grid: FC<GridProps> = ({ cards }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('grid')}>
      {cards.map(({ id, imgUrl, title, name, year }) => {
        return (
          <div key={id} className={cx('grid__item')}>
            <Card
              imgUrl={imgUrl}
              title={title}
              name={name}
              year={year}
              id={id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
