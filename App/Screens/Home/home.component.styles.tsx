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
  arrowIcon: {
    width: 12,
    height: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  forecastDailyContainer: {
    gap: 8,
  },
  paddingSide: {
    paddingHorizontal: 8,
  },
  forecastDailyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateItem: {
    padding: 4,
    alignItems: 'center',
  },
  date: {
    fontSize: Fonts.size.h6,
    fontWeight: '200',
  },
  selectedItem: {
    backgroundColor: Color.grey,
    borderRadius: 6,
  },
  selectedDate: {
    fontWeight: '400',
  },
  listImage: {
    width: 20,
    height: 20,
  },
  scrollContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingBottom: 10,
  },
  dailyForecastHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weatherText: {
    fontSize: Fonts.size.h5,
    fontWeight: '600',
  },
  descriptionText: {
    fontWeight: '200',
    fontSize: Fonts.size.h6,
  },
  weatherInformation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
