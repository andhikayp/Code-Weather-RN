import utils from '../../Utils';

const {formatTime, roundNumber, getCompassDirection, formatDate} = utils;

const mappingHourly = hourly => {
  return hourly.map(hourlyWeather => {
    const {dt, weather, temp} = hourlyWeather;
    const {icon} = weather[0];

    return {
      dt,
      icon,
      temp,
      isTemperature: true,
    };
  });
};

const mappingHourlyWeather = (hourly: [], daily: []) => {
  let additionalWeather = [];
  const lastValueHourly = hourly[hourly.length - 1];
  const firstValueHourly = hourly[0];
  const {date} = formatDate(lastValueHourly.dt);
  daily.forEach(item => {
    const {date: itemDate} = formatDate(item.dt);
    if (itemDate <= date) {
      if (
        item.sunrise < lastValueHourly.dt &&
        item.sunrise > firstValueHourly.dt
      ) {
        additionalWeather.push({
          dt: item.sunrise,
          icon: 'sunrise',
          temp: 'Sunrise',
          isTemperature: false,
        });
      }
      if (
        item.sunset < lastValueHourly.dt &&
        item.sunset > firstValueHourly.dt
      ) {
        additionalWeather.push({
          dt: item.sunset,
          icon: 'sunset',
          temp: 'Sunset',
          isTemperature: false,
        });
      }
    }
  });
  const mappedHourly = mappingHourly(hourly);

  return mappedHourly.concat(additionalWeather).sort((a, b) => {
    return a.dt - b.dt;
  });
};

const mappingDailyForecast = dailyWeather => {
  const {
    sunrise,
    sunset,
    uvi,
    humidity,
    pressure,
    wind_speed,
    wind_deg,
    rain,
    pop,
  } = dailyWeather;

  return [
    {
      label: 'precipitation',
      value: roundNumber(rain, 1),
    },
    {
      label: 'probability-precipitation',
      value: pop * 100,
    },
    {
      label: 'wind',
      value: roundNumber(wind_speed, 1),
      compassDirection: getCompassDirection(wind_deg),
      rotate: wind_deg,
    },
    {
      label: 'pressure',
      value: pressure,
    },
    {
      label: 'humidity',
      value: humidity,
    },
    {
      label: 'uv-index',
      value: roundNumber(uvi, 1),
    },
    {
      label: 'sunrise',
      value: formatTime(sunrise),
    },
    {
      label: 'sunset',
      value: formatTime(sunset),
    },
  ];
};

export default {
  mappingHourlyWeather,
  mappingDailyForecast,
};
