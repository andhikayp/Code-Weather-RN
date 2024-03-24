import {StyleSheet} from 'react-native';

import {Fonts} from '../../../Themes';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingBottom: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
  weatherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingHorizontal: 10,
  },
  time: {
    fontSize: Fonts.size.h6,
    fontWeight: '200',
  },
  temperature: {
    fontSize: Fonts.size.h5,
  },
  weatherLayout: {
    flexDirection: 'row',
  },
});
