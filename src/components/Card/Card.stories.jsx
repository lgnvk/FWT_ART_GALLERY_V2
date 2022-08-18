import React from 'react';
import Card from './Card.tsx';

import img from '../../img/image.jpg';
import './Card.scss';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => {
  return <Card {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: 'Authors Name',
  imgUrl: img,
  year: '1999 - 2000',
};
