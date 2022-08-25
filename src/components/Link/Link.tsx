import React, { FC } from 'react';
import './Link.scss';
import cn from 'classnames';

interface LinkProps {
  theme: 'dark' | 'light';
  link: string;
  value: string;
}
const Link: FC<LinkProps & HTMLAnchorElement> = ({ theme, link, value }) => {
  const styles = cn('wrapper', theme);
  return (
    <div className={styles}>
      <a href={link} className="link">
        {value}
      </a>
      <div className="underline" />
    </div>
  );
};

export default Link;
