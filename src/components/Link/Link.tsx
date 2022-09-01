import React, { FC, ReactNode, LinkHTMLAttributes } from 'react';
import cn from 'classnames';
import './Link.scss';

type LinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
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
