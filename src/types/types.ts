export type CardType = {
  id: number;
  title: string;
  name: string;
  imgUrl: string;
  year: string;
};

export type ThemeType = {
  theme: 'dark' | 'light';
  themeToggler?: () => void;
};