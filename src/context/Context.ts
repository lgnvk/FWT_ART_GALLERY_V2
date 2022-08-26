import React from 'react';

type ThemeType = {
  theme: 'dark' | 'light';
  themeToggler?: () => void;
};

export const defaultContext: ThemeType = {
  theme: 'dark',
};

export const ThemeContext = React.createContext<ThemeType>(defaultContext);
