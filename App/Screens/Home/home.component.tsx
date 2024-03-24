import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';

import {getWeatherData} from '../../Redux/actions/counterActions';
import i18n from '../../Utils/locale/i18n';
import styles from './home.component.styles';
import {Images, useTheme} from '../../Themes';
import utils from '../../Utils';
import {Information} from './Information';
import {HourlyWeather} from './HourlyWeather';
import config from './Home.config';
import {Separator} from '../../Components/Separator';
import {InlineTextView} from '../../Components/InlineTextView';
import {Loading} from './Loading';

const {capitalize, formatTemperature, formatDate, roundNumber} = utils;
const {mappingHourlyWeather, mappingDailyForecast} = config;

const screenName = 'Home';

const Home = props => {
  const {getWeather, weatherDetail, isLoading} = props;

  useEffect(() => {
    getWeather();
  }, []);

  const {theme} = useTheme();
  const scrollViewRef = useRef(null);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const screenWidth = Dimensions.get('window').width;

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
    const {weather, temp, feels_like} = weatherDetail.current;
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
    return (
      <Information
        screenName={screenName}
        currentWeather={weatherDetail.current}
      />
    );
  };

  const renderForecastHourlyWeather = () => {
    const {hourly, daily, current} = weatherDetail;
    const mappedHourly = mappingHourlyWeather(hourly, daily, current);

    return (
      <HourlyWeather hourlyWeathers={mappedHourly} screenName={screenName} />
    );
  };

  const renderRangeWeather = dailyWeather => {
    const {min, max} = dailyWeather.temp;
    const maximumTemperature = roundNumber(max);
    const {icon} = dailyWeather.weather[0];

    return (
      <View style={styles.weatherInformation}>
        <Text>{`${maximumTemperature} / ${formatTemperature(min, true)}`}</Text>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          style={styles.iconWeather}
        />
      </View>
    );
  };

  const renderDailyWeather = (dailyWeather, key) => {
    const {dt} = dailyWeather;
    const {date, day, month} = formatDate(dt);
    const onPress = () => {
      setIsShowDetail(true);
      setDateTime(key);
      handleScrollToPosition(key * screenWidth, 0, false);
    };
    const label = `${day} ${month} ${date}`;

    const renderRightItem = () => {
      return (
        <>
          {renderRangeWeather(dailyWeather)}
          <Image style={styles.arrowIcon} source={Images.rightArrow} />
        </>
      );
    };

    return (
      <View style={styles.paddingSide} key={key}>
        <InlineTextView
          onPress={onPress}
          label={label}
          renderRightItem={renderRightItem}
        />
      </View>
    );
  };

  const renderForecastDailyWeather = () => {
    return <View>{weatherDetail.daily.map(renderDailyWeather)}</View>;
  };

  const renderDate = () => {
    const renderDateItem = (dailyItem, key) => {
      const {dt} = dailyItem;
      const {day, date} = formatDate(dt);
      const isSelected = key === dateTime;
      const handleOnPress = () => {
        setDateTime(key);
        handleScrollToPosition(key * screenWidth, 0);
      };

      return (
        <TouchableOpacity
          key={dt}
          onPress={handleOnPress}
          style={[styles.dateItem, isSelected && styles.selectedItem]}>
          <Text style={styles.date}>{day}</Text>
          <Text style={[styles.date, isSelected && styles.selectedDate]}>
            {date}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.dateContainer}>
        {weatherDetail.daily.map(renderDateItem)}
      </View>
    );
  };

  const handleScrollToPosition = (x, y, animated = true) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x, y, animated});
    }
  };

  const renderForecastDetail = dailyItem => {
    const {dt} = dailyItem;
    const {description, main} = dailyItem.weather[0];
    const mappedDailyForecast = mappingDailyForecast(dailyItem);

    const renderForecastInformation = () => {
      return (
        <View style={styles.dailyForecastHeader}>
          <View>
            <Text style={styles.weatherText}>{capitalize(description)}</Text>
            <Text style={styles.descriptionText}>{capitalize(main)}</Text>
          </View>
          <View>{renderRangeWeather(dailyItem)}</View>
        </View>
      );
    };

    const renderDailyForecastItem = (mappedDailyForecastItem, key) => {
      const {label, value, compassDirection, rotate} = mappedDailyForecastItem;

      const renderRotateIcon = () => (
        <Image
          style={styles.arrowIcon}
          source={Images.navigationArrow}
          transform={[{rotate: `${rotate}deg`}]}
        />
      );

      const renderRightItem = () => {
        return (
          <View style={styles.dateContainer}>
            <Text>
              {i18n.t(`${screenName}-value-${label}`, {
                value,
                compassDirection,
              })}
            </Text>
            {rotate && renderRotateIcon()}
          </View>
        );
      };

      return (
        <InlineTextView
          containerStyle={{paddingVertical: 16}}
          label={i18n.t(`${screenName}-label-${label}`)}
          isDisabled={true}
          key={key}
          renderRightItem={renderRightItem}
        />
      );
    };

    const renderDailyForecastList = () => {
      return <View>{mappedDailyForecast.map(renderDailyForecastItem)}</View>;
    };

    return (
      <View style={{paddingHorizontal: 8, width: screenWidth}} key={dt}>
        {renderForecastInformation()}
        {renderDailyForecastList()}
      </View>
    );
  };

  const renderForecastDetails = () => {
    const handleOnScroll = event => {
      const positionX = event.nativeEvent.contentOffset.x;
      const index = Math.round(positionX / screenWidth);
      setDateTime(index);
    };

    return (
      <ScrollView
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollBegin={handleOnScroll}
        onMomentumScrollEnd={handleOnScroll}
        scrollEventThrottle={8}
        style={styles.scrollContainer}
        onLayout={() => {
          handleScrollToPosition(dateTime * screenWidth, 0);
        }}
        horizontal
        pagingEnabled={true}>
        {weatherDetail.daily.map(renderForecastDetail)}
      </ScrollView>
    );
  };

  const renderForecastDailyDetail = () => {
    const handleOnPress = () => {
      setIsShowDetail(false);
    };

    return (
      <View style={styles.forecastDailyContainer}>
        <View style={[styles.forecastDailyHeader, styles.paddingSide]}>
          <View>{renderDate()}</View>
          <TouchableOpacity onPress={handleOnPress}>
            <Image source={Images.list} style={styles.listImage} />
          </TouchableOpacity>
        </View>
        <Separator isVertical={false} containerStyle={styles.paddingSide} />
        <View>{renderForecastDetails()}</View>
      </View>
    );
  };

  const renderLoading = () => <Loading screenName={screenName} />;

  const renderContent = () => (
    <SafeAreaView
      style={{
        backgroundColor: theme.primary,
        flex: 1,
      }}>
      {renderHeader()}
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}>
        {renderLatestWeatherInformation()}
        {renderPrecipitationInformation()}
        {renderDetailInformation()}
        {renderForecastHourlyWeather()}
        {!isShowDetail && renderForecastDailyWeather()}
        {isShowDetail && renderForecastDailyDetail()}
      </ScrollView>
    </SafeAreaView>
  );

  return isLoading ? renderLoading() : renderContent();
};

const mapStateToProps = state => ({
  weatherDetail: state.counter.dataWeather,
  isLoading: state.counter.isLoading,
});

export default connect(mapStateToProps, {
  getWeather: getWeatherData,
})(Home);
