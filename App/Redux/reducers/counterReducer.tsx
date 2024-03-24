import {SET_WEATHER_DATA, APP_LOADING} from '../actions/types';

const initialState = {
  count: 0,
  dataWeather: {},
  isLoading: true,
};

const isLoading = (state, action) => {
  return updateObject(state, {isLoading: action.isLoading});
};

const updateObject = (oldObject: any, updatedProps: any) => {
  return {
    ...oldObject,
    ...updatedProps,
  };
};

const setWeatherData = (state: any, action: any) => {
  return updateObject(state, {dataWeather: action.data});
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return setWeatherData(state, action);
    case APP_LOADING:
      return isLoading(state, action);
    default:
      return state;
  }
};

export default counterReducer;
