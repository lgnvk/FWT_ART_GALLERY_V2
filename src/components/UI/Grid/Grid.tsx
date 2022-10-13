import React, { FC } from 'react';
import cn from 'classnames/bind';
import { useAppSelector } from '../../../store/hooks';
import Card from '../Card';
import type { AuthorsGridType } from '../../../types/types';
import styles from './Grid.scss';

const Grid: FC<AuthorsGridType> = () => {
  const cx = cn.bind(styles);
  const authors = useAppSelector((state) => state.main.cards);
  return (
    <ul className={cx('grid')}>
      {authors.map(({ id, imgUrl, title, name, year }) => {
        return (
          <li key={id} className={cx('grid__item')}>
            <Card
              imgUrl={imgUrl}
              title={title}
              name={name}
              year={year}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Grid;
