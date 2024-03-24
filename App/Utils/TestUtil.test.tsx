import TestUtil from './TestUtil';

const {testProps} = TestUtil;

describe('TestUtil', () => {
  describe('#testProps', () => {
    it('should return testID and accessibilityLabel according to input id', () => {
      const id = 'Home_inline';
      const expectedResult = {
        testID: id,
        accessibilityLabel: id,
      };

      const result = testProps(id);

      expect(result).toEqual(expectedResult);
    });
  });
});
