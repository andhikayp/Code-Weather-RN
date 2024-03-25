import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './CurrentWeather.component.styles';
import utils from '../../../Utils';
import i18n from '../../../Utils/locale/i18n';

const {testProps, capitalize, formatTemperature} = utils;

const CurrentWeather = props => {
  const {screenName, currentWeather} = props;
  const {weather, temp, feels_like} = currentWeather;
  const {icon, description, main} = weather[0];

  return (
    <View
      style={styles.mainContainer}
      {...testProps(`${screenName}_current_weather`)}>
      <View style={styles.rowContainer}>
        <View>
          <Image
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            style={styles.iconWeather}
            {...testProps(`${screenName}_icon_weather`)}
          />
        </View>
        <View style={styles.columnContainer}>
          <Text style={styles.weatherDescription}>
            {capitalize(description)}
          </Text>
          <Text style={styles.mainWeatherDescription}>{main}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.temperature}>{formatTemperature(temp)}</Text>
      </View>
      <View>
        <Text style={styles.temperatureFeels}>
          {i18n.t(`${screenName}-temperature-feels-like`, {
            temperature: formatTemperature(feels_like),
          })}
        </Text>
      </View>
    </View>
  );
};

export default CurrentWeather;
