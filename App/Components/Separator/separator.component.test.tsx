import {render} from '@testing-library/react-native';

import Separator from './separator.component';

describe('Separator', () => {
  const props = {
    screenName: 'Home',
  };

  describe('#render', () => {
    it('should render expected component', () => {
      const {getByTestId} = render(<Separator {...props} />);

      expect(getByTestId('Home_separator')).toBeTruthy();
    });
  });
});
