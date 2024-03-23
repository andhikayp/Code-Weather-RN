/* eslint-disable react/react-in-jsx-scope */
import {useColorScheme} from 'react-native';
import {useContext} from 'react';

import {ThemeContext, themes} from './ThemeContext';

export const ThemeProvider = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
