import NumberUtil from './NumberUtil';

const {roundNumber, convertMeterToKilometer, getCompassDirection} = NumberUtil;

describe('NumberUtil', () => {
  describe('#roundNumber', () => {
    it('should round number without decimal', () => {
      const input = 34.45;
      const expectedResult = '34';

      const result = roundNumber(input);

      expect(result).toEqual(expectedResult);
    });

    it('should round number with 1 decimal', () => {
      const input = 34.45;
      const expectedResult = '34.5';

      const result = roundNumber(input, 1);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#convertMeterToKilometer', () => {
    it('should convert meter to kilometer with 1 decimal', () => {
      const input = 12620;
      const expectedResult = '12.6';

      const result = convertMeterToKilometer(input);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#getCompassDirection', () => {
    it('should get compas direction', () => {
      const input = 45;
      const expectedResult = 'NE';

      const result = getCompassDirection(input);

      expect(result).toEqual(expectedResult);
    });
  });
});
