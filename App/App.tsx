import React from 'react';
import {StatusBar} from 'react-native';

import {Home} from './Screens/Home';
import {Color, ThemeProvider} from './Themes';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <Home />
    </ThemeProvider>
  );
}

export default App;
