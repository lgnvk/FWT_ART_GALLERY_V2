import React, { FC } from 'react';
import './Link.scss';
import cn from 'classnames';

interface LinkProps {
  theme: string;
}
const Link: FC<LinkProps & HTMLAnchorElement> = ({ theme }) => {
  const styles = cn('wrapper', theme);
  return (
    <div className={styles}>
      <a href="." className="link">
        SMTH
      </a>
      <div className="underline" />
    </div>
  );
};

export default Link;
