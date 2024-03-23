const roundNumber = (number: number, decimal = 0) => {
  return number.toFixed(decimal);
};

const convertMeterToKilometer = meter => {
  const kilometer = meter / 1000;

  return roundNumber(kilometer, 1);
};

const getCompassDirection = degree => {
  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];

  degree = ((degree % 360) + 360) % 360;
  const index = Math.round(degree / 22.5) % 16;

  return directions[index];
};

export default {
  roundNumber,
  convertMeterToKilometer,
  getCompassDirection,
};
