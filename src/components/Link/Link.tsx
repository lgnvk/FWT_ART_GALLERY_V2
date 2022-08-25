import React, { FC, ReactNode } from 'react';
import './Link.scss';
import cn from 'classnames';

interface LinkProps {
  theme: 'dark' | 'light';
  link: string;
  children: ReactNode;
}
const Link: FC<LinkProps & HTMLAnchorElement> = ({ theme, link, children }) => {
  const styles = cn('wrapper', theme);
  return (
    <div className={styles}>
      <a href={link} className="link">
        {children}
      </a>
      <div className="underline" />
    </div>
  );
};

export default Link;
