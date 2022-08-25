import React, { FC } from 'react';
import cn from 'classnames';
import './Button.scss';

type ButtonProps = {
  handleClick: () => void;
  theme: 'dark' | 'light';
  buttonType: 'outlined' | 'filled';
  value: string;
};

type AllProps = ButtonProps & HTMLButtonElement;

const Button: FC<AllProps> = ({ handleClick, theme, buttonType, value }) => {
  const styles = cn('button', theme, buttonType);
  return (
    <button type="button" onClick={() => handleClick} className={styles}>
      {value}
    </button>
  );
};

export default Button;
