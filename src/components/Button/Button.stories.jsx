import React from 'react';
import Button from './Button.tsx';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttonType: '',
  theme: '',
};
