import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './Redux/store';
import {Home} from './Screens/Home';
import {Color, ThemeProvider} from './Themes';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
