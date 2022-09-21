import React, { FC, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type LayoutType = {
  children: ReactNode;
};

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
