import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import styles from './hourlyWeather.component.styles';
import utils from '../../../Utils';
import VerticalSeparator from '../../../Components/VerticalSeparator/verticalSeparator.component';
import {Images} from '../../../Themes';

const {formatTime, formatTemperature, formatDate} = utils;

const HourlyWeather = props => {
  const {hourlyWeathers} = props;

  const renderWeatherItem = (hourlyWeather, key) => {
    const {dt, icon, temp, isTemperature} = hourlyWeather;
    const time = formatTime(dt);
    const isDateChanged = time === '00:00';
    const {date} = formatDate(dt);

    const renderVerticalSeparator = () => (
      <VerticalSeparator width={1} color="lightgray" />
    );

    const renderTemperatureIcon = () => (
      <Image
        style={styles.icon}
        src={`https://openweathermap.org/img/wn/${icon}.png`}
      />
    );

    const renderSunIcon = () => (
      <Image style={styles.icon} source={Images[icon]} />
    );

    return (
      <>
        {isDateChanged && renderVerticalSeparator()}
        <View style={styles.weatherContainer} key={key}>
          <Text style={styles.time}>{isDateChanged ? date : time}</Text>
          {isTemperature ? renderTemperatureIcon() : renderSunIcon()}
          <Text style={styles.temperature}>
            {isTemperature ? formatTemperature(temp, true) : temp}
          </Text>
        </View>
      </>
    );
  };

  return (
    <ScrollView style={styles.container} horizontal>
      {hourlyWeathers.map(renderWeatherItem)}
    </ScrollView>
  );
};

export default HourlyWeather;
