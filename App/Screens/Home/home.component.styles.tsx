import {StyleSheet} from 'react-native';

import {Color, Fonts} from '../../Themes';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 14,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconWeather: {
    width: 32,
    height: 32,
  },
  inputSearchText: {
    fontSize: Fonts.size.h4,
    fontWeight: 'bold',
    marginLeft: 6,
    flex: 1,
    marginRight: 16,
  },
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
  precipitationInformation: {
    textAlign: 'center',
    fontWeight: '600',
  },
});
