import {render, cleanup} from '@testing-library/react-native';

import Header from './Header.component';

describe('Header', () => {
  describe('#render', () => {
    const props = {
      screenName: 'Home',
    };

    afterEach(() => {
      cleanup();
    });

    it('should render header component', () => {
      const images = ['setting', 'search'];
      const {getByTestId} = render(<Header {...props} />);

      expect(getByTestId('Home_header')).toBeTruthy();
      images.map(image => {
        const imageTestID = `Home_${image}_image`;
        expect(getByTestId(imageTestID)).toBeTruthy();
      });
    });
  });
});
