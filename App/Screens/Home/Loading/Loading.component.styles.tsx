import {StyleSheet} from 'react-native';

import {Color} from '../../../Themes';

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'stretch',
    backgroundColor: Color.grey,
  },
  vertical: {
    width: 1.5,
  },
  horizontal: {
    height: 1.5,
  },
  logo: {
    width: 80,
    height: 80,
  },
  container: {
    alignItems: 'center',
    flex: 9,
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
