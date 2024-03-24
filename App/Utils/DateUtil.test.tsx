import DateUtil from './DateUtil';

const {formatTime, formatDate} = DateUtil;

describe('DateUtil', () => {
  describe('#formatTime', () => {
    it('should format date', () => {
      const input = '1711095261';
      const expectedResult = '15:14';

      const result = formatTime(input);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('#formatDate', () => {
    it('should format date', () => {
      const input = '1711095261';
      const expectedResult = {
        date: '22',
        month: 'Mar',
        day: 'Fri',
      };

      const result = formatDate(input);

      expect(result).toEqual(expectedResult);
    });
  });
});
