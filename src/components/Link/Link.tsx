import React, { FC, ReactNode, LinkHTMLAttributes } from 'react';
import cn from 'classnames/bind';
import styles from './Link.scss';

type LinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
  theme: 'dark' | 'light';
  link: string;
  children: ReactNode;
};

const Link: FC<LinkProps> = ({ theme, link, children }) => {
  const cx = cn.bind(styles);
  return (
    <div className={cx('link', theme)}>
      <a href={link} className={cn('link__item')}>
        {children}
      </a>
      <div className={cn('link__underline')} />
    </div>
  );
};

export default Link;
