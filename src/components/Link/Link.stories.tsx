import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from '.';

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>;

export const Default: ComponentStory<typeof Link> = (args) => (
  <Link {...args} href="." />
);

Default.args = {
  theme: 'dark',
  value: 'something',
};