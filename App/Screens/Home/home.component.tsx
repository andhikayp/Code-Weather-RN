import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

import i18n from '../../Utils/locale/i18n';
import styles from './home.component.styles';
import {Images, useTheme} from '../../Themes';
import {weatherDetail} from './Home.fixtures';
import utils from '../../Utils';
import {Information} from './Information';
import {HourlyWeather} from './HourlyWeather';
import config from './Home.config';

const {capitalize, formatTime, formatTemperature} = utils;
const {mappingHourlyWeather} = config;

const screenName = 'Home';

const Home = props => {
  const {current, hourly, daily} = weatherDetail;
  const {weather, temp, feels_like} = current;
  const {theme} = useTheme();

  const renderHeader = () => (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={Images.search} style={styles.icon} />
        <Text
          style={[styles.inputSearchText, {color: theme.secondary}]}
          numberOfLines={1}>
          {i18n.t('Header-address')}
        </Text>
      </View>
      <View>
        <Image source={Images.setting} style={styles.icon} />
      </View>
    </View>
  );

  const renderLatestWeatherInformation = () => {
    const {icon, description, main} = weather[0];

    return (
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <View>
            <Image
              src={`https://openweathermap.org/img/wn/${icon}.png`}
              style={styles.iconWeather}
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

  const renderPrecipitationInformation = () => {
    return (
      <View>
        <Text style={styles.precipitationInformation}>
          {i18n.t(`${screenName}-precipitation-hour`)}
        </Text>
      </View>
    );
  };

  const renderDetailInformation = () => {
    return <Information screenName={screenName} currentWeather={current} />;
  };

  const renderForecastHourlyWeather = () => {
    const mappedHourly = mappingHourlyWeather(hourly, daily, current);

    return (
      <HourlyWeather hourlyWeathers={mappedHourly} screenName={screenName} />
    );
  };

  const renderForecastDailyWeather = () => {
    return (
      <View>
        <Text>Init</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.primary,
      }}>
      {renderHeader()}
      {renderLatestWeatherInformation()}
      {renderPrecipitationInformation()}
      {renderDetailInformation()}
      {renderForecastHourlyWeather()}
      {renderForecastDailyWeather()}
    </SafeAreaView>
  );
};

export default Home;
