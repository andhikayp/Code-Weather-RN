import TextUtil from './TextUtil';

const {capitalize, formatTemperature} = TextUtil;

describe('TextUtil', () => {
  describe('#capitalize', () => {
    it('should transform text into capitalize word', () => {
      const input = 'few clouds';
      const expectedResult = 'Few clouds';

      const result = capitalize(input);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#formatTemperature', () => {
    it('should format temperature without space', () => {
      const input = 38.95;
      const expectedResult = '39°C';

      const result = formatTemperature(input);

      expect(result).toEqual(expectedResult);
    });

    it('should format temperature with space', () => {
      const input = 38.95;
      const expectedResult = '39 °C';

      const result = formatTemperature(input, true);

      expect(result).toEqual(expectedResult);
    });
  });
});
