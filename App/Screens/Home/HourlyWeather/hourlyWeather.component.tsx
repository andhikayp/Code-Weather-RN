import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import styles from './hourlyWeather.component.styles';
import utils from '../../../Utils';
import {Separator} from '../../../Components/Separator';
import {Images} from '../../../Themes';

const {formatTime, formatTemperature, formatDate, testProps} = utils;

const HourlyWeather = props => {
  const {hourlyWeathers, screenName} = props;

  const renderWeatherItem = (hourlyWeather, key) => {
    const {dt, icon, temp, isTemperature} = hourlyWeather;
    const time = formatTime(dt);
    const isDateChanged = time === '00:00';
    const {date, month} = formatDate(dt);

    const renderSeparator = () => <Separator screenName={screenName} />;

    const renderTemperatureIcon = () => (
      <Image
        style={styles.icon}
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        {...testProps(`${screenName}_image_temperature`)}
      />
    );

    const renderSunIcon = () => (
      <Image
        style={styles.icon}
        source={Images[icon]}
        {...testProps(`${screenName}_sun_temperature`)}
      />
    );

    return (
      <View key={key} style={styles.weatherLayout}>
        {isDateChanged && renderSeparator()}
        <View style={styles.weatherContainer}>
          <Text style={styles.time}>
            {isDateChanged ? `${month} ${date}` : time}
          </Text>
          {isTemperature ? renderTemperatureIcon() : renderSunIcon()}
          <Text style={styles.temperature}>
            {isTemperature ? formatTemperature(temp, true) : temp}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      alwaysBounceHorizontal={false}
      horizontal>
      {hourlyWeathers.map(renderWeatherItem)}
    </ScrollView>
  );
};

export default HourlyWeather;
