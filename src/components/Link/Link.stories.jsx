import React from 'react';
import Link from './Link.tsx';

export default {
  title: 'Link',
  component: Link,
};

const Template = (args) => <Link {...args} href="." />;

export const Default = Template.bind({});

Default.args = {
  theme: '',
};
