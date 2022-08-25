import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '.';
import img from '../../img/image.jpg';
import './Card.scss';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Dark: ComponentStory<typeof Card> = (args) => <Card {...args} />;

Dark.args = {
  title: 'Authors Name',
  name: '',
  imgUrl: img,
  year: '1999 - 2000',
};
