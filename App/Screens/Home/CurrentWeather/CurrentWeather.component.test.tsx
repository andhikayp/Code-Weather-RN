import {render, cleanup} from '@testing-library/react-native';

import CurrentWeather from './CurrentWeather.component';
import {weatherDetail} from '../Home.fixtures';

describe('CurrentWeather', () => {
  describe('#render', () => {
    const {current} = weatherDetail;
    const props = {
      screenName: 'Home',
      currentWeather: current,
    };

    afterEach(() => {
      cleanup();
    });

    it('should render current weather information', () => {
      const {getByTestId, getByText} = render(<CurrentWeather {...props} />);

      expect(getByTestId('Home_current_weather')).toBeTruthy();
      expect(getByTestId('Home_icon_weather')).toBeTruthy();
      expect(getByText('Few clouds')).toBeTruthy();
      expect(getByText('Clouds')).toBeTruthy();
      expect(getByText('32°C')).toBeTruthy();
      expect(getByText('Feels like 39°C')).toBeTruthy();
    });
  });
});
