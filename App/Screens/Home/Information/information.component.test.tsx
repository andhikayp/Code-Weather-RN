import {render, cleanup} from '@testing-library/react-native';

import Information from './information.component';
import {weatherDetail} from '../Home.fixtures';

describe('Information', () => {
  describe('#render', () => {
    const {current} = weatherDetail;
    const props = {
      screenName: 'Home',
      currentWeather: current,
    };

    afterEach(() => {
      cleanup();
    });

    it('should render arrow image and expected label when rendered', () => {
      const arrowImageTestID = 'Home_arrow_image';
      const labels = [
        'wind',
        'humidity',
        'uv-index',
        'pressure',
        'visibility',
        'dew-point',
      ];
      const {getByTestId} = render(<Information {...props} />);

      expect(getByTestId(arrowImageTestID)).toBeTruthy();
      labels.map(label => {
        const labelTestID = `Home_${label}_label`;
        expect(getByTestId(labelTestID)).toBeTruthy();
      });
    });
  });
});
