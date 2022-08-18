import React from 'react';
import Grid from './Grid.tsx';
import './Grid.scss';
import img from '../../img/image.jpg';

export default {
  title: 'Grid',
  component: Grid,
};

const Template = ({ ...args }) => {
  return <Grid {...args} cards={args.cards} />;
};

export const Default = Template.bind({});

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