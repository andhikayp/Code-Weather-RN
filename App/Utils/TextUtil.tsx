import NumberUtil from './NumberUtil';
import i18n from './locale/i18n';

const {roundNumber} = NumberUtil;

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const formatTemperature = (temperature: string, withSpace = false) => {
  const roundedTemperature = roundNumber(temperature);
  const formattedTemperature = i18n.t('Util-temperature', {
    temperature: roundedTemperature,
  });

  if (withSpace) {
    return formattedTemperature;
  }
  return formattedTemperature.replace(/\s/g, '');
};

export default {
  capitalize,
  formatTemperature,
};
