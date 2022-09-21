import React from 'react';
import { ThemeType } from '../types/types';

export const defaultContext: ThemeType = {
  theme: 'dark',
};

export const ThemeContext = React.createContext<ThemeType>(defaultContext);
