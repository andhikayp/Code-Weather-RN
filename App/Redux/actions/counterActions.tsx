import {SET_WEATHER_DATA, APP_LOADING} from './types';

import axios from 'axios';

export const setWeatherData = data => {
  return {
    type: SET_WEATHER_DATA,
    data: data,
  };
};

export const isLoading = data => {
  return {
    type: APP_LOADING,
    isLoading: data,
  };
};

export const getWeatherData = () => {
  return dispatch => {
    const urlData =
      'https://api.openweathermap.org/data/3.0/onecall?lat=-7.292956&lon=112.732929&appid=68066ee3755086caaa75cc4f8cf159a1&units=metric';

    axios.get(urlData).then(res => {
      dispatch(setWeatherData(res.data));
      dispatch(isLoading(false));
    });
  };
};
