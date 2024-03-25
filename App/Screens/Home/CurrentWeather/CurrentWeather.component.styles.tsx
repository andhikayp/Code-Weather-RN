import {StyleSheet} from 'react-native';

import {Fonts} from '../../../Themes';

const styles = StyleSheet.create({
  mainContainer: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  iconWeather: {
    width: 32,
    height: 32,
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 1,
  },
  weatherDescription: {
    fontSize: Fonts.size.h6,
    fontWeight: '400',
  },
  mainWeatherDescription: {
    fontSize: Fonts.size.h6,
    fontWeight: '200',
  },
  temperature: {
    fontSize: Fonts.size.h1,
    fontWeight: '200',
  },
  temperatureFeels: {
    fontWeight: '200',
  },
});

export default styles;
