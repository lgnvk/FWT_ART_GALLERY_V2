import React, { FC, ReactNode } from 'react';
import './Link.scss';
import cn from 'classnames';

type LinkProps = {
  theme: 'dark' | 'light';
  link: string;
  children: ReactNode;
};

type AllProps = LinkProps & HTMLAnchorElement;

const Link: FC<AllProps> = ({ theme, link, children }) => {
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
