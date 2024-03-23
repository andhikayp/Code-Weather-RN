import {createContext} from 'react';

import Color from './Color';

const themes = {
  light: {
    primary: Color.white,
    secondary: Color.black,
  },
  dark: {
    primary: Color.black,
    secondary: Color.white,
  },
};

const ThemeContext = createContext(themes.light);

export {ThemeContext, themes};
