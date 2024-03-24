import {render, cleanup} from '@testing-library/react-native';

import Loading from './Loading.component';

describe('Loading', () => {
  describe('#render', () => {
    const props = {
      screenName: 'Home',
    };

    afterEach(() => {
      cleanup();
    });

    it('should render logo image and expected text when rendered', () => {
      const logoImageTestID = 'Home_logo_image';

      const {getByTestId, getByText} = render(<Loading {...props} />);

      expect(getByTestId(logoImageTestID)).toBeTruthy();
      expect(getByText('Fetching the weather...')).toBeTruthy();
      expect(getByText('OpenWeather')).toBeTruthy();
    });
  });
});
