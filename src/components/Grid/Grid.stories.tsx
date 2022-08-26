import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Grid from '.';
import './Grid.scss';
import img from '../../img/image.jpg';

export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const Default: ComponentStory<typeof Grid> = ({ ...args }) => {
  return <Grid {...args} cards={args.cards} />;
};

Default.args = {
  cards: [
    { id: 1, title: 'asd', name: 'awr', imgUrl: img, year: '123-123' },
    { id: 2, title: 'asd', name: 'awr', imgUrl: img, year: '123-123' },
    { id: 3, title: 'asd', name: 'awr', imgUrl: img, year: '123-123' },
    { id: 4, title: 'asd', name: 'awr', imgUrl: img, year: '123-123' },
    { id: 5, title: 'asd', name: 'awr', imgUrl: img, year: '123-123' },
    { id: 6, title: 'asd', name: 'awr', imgUrl: img, year: '123-123' },
  ],
};
