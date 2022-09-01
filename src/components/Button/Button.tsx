import React, { FC } from 'react';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  handleClick?: () => void;
  theme?: 'dark' | 'light';
  buttonType?: 'outlined' | 'filled';
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({
  handleClick,
  theme = 'light',
  buttonType = 'outlined',
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
