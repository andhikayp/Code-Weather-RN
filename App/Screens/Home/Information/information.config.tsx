import utils from '../../../Utils';

const {
  roundNumber,
  convertMeterToKilometer,
  formatTemperature,
  getCompassDirection,
} = utils;

const mappingInformation = currentWeather => {
  const {wind_speed, wind_deg, humidity, uvi, pressure, visibility, dew_point} =
    currentWeather;

  return [
    {
      key: 'wind',
      value: roundNumber(wind_speed, 1),
      compassDirection: getCompassDirection(wind_deg),
      rotate: wind_deg,
    },
    {
      key: 'humidity',
      value: humidity,
    },
    {
      key: 'uv-index',
      value: roundNumber(uvi, 1),
    },
    {
      key: 'pressure',
      value: pressure,
    },
    {
      key: 'visibility',
      value: convertMeterToKilometer(visibility),
    },
    {
      key: 'dew-point',
      value: formatTemperature(dew_point),
    },
  ];
};

export default {mappingInformation};
