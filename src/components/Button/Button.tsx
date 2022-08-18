import React, { FC } from 'react';
import cn from 'classnames';
import './Button.scss';

interface ButtonProps {
  handleClick: () => void;
  theme: string;
  buttonType: string;
}

const Button: FC<ButtonProps & HTMLButtonElement> = ({
  handleClick,
  theme,
  buttonType,
}) => {
  const styles = cn('button', theme, buttonType);
  return (
    <button type="button" onClick={() => handleClick} className={styles}>
      Button
    </button>
  );
};

export default Button;
