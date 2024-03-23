import moment from 'moment';

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

const mappingHourlyWeather = (hourly: [], daily: [], current) => {
  let additionalWeather = [];
  const lastValueHourly = hourly.slice(-1)[0];

  daily.map(item => {
    const dailyWeather = hourly.find(weather => weather.dt === item.dt);
    if (dailyWeather) {
      if (item.sunrise < lastValueHourly.dt) {
        additionalWeather.push({
          dt: item.sunrise,
          icon: 'sunrise',
          temp: 'Sunrise',
          isTemperature: false,
        });
      }
      if (item.sunset < lastValueHourly.dt) {
        additionalWeather.push({
          dt: item.sunset,
          icon: 'sunset',
          temp: 'Sunset',
          isTemperature: false,
        });
      }
    }
  });
  if (current.sunrise > moment().unix()) {
    additionalWeather.push({
      dt: current.sunrise,
      icon: 'sunrise',
      temp: 'Sunrise',
      isTemperature: false,
    });
  }
  if (current.sunset > moment().unix()) {
    additionalWeather.push({
      dt: current.sunset,
      icon: 'sunset',
      temp: 'Sunset',
      isTemperature: false,
    });
  }
  const mappedHourly = mappingHourly(hourly);

  return mappedHourly.concat(additionalWeather).sort((a, b) => {
    return a.dt - b.dt;
  });
};

export default {
  mappingHourlyWeather,
};
