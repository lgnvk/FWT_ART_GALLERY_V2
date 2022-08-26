import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import './Button.scss';

type ButtonProps = HTMLButtonElement & {
  handleClick: () => void;
  theme: 'dark' | 'light';
  buttonType: 'outlined' | 'filled';
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({
  handleClick,
  theme,
  buttonType,
  children,
}) => {
  const styles = cn('button', theme, buttonType);
  return (
    <button type="button" onClick={handleClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
