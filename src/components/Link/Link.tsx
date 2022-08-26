import React, { FC, ReactNode } from 'react';
import './Link.scss';
import cn from 'classnames';

type LinkProps = HTMLAnchorElement & {
  theme: 'dark' | 'light';
  link: string;
  children: ReactNode;
};

const Link: FC<LinkProps> = ({ theme, link, children }) => {
  const styles = cn('link', theme);
  return (
    <div className={styles}>
      <a href={link} className="link__item">
        {children}
      </a>
      <div className="link__underline" />
    </div>
  );
};

export default Link;
