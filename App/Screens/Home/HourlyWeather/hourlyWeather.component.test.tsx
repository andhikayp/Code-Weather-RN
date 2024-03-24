import {render, cleanup} from '@testing-library/react-native';

import HourlyWeather from './hourlyWeather.component';

describe('HourlyWeather', () => {
  describe('#render', () => {
    const hourlyWeathers = [
      {
        dt: 1711278000,
        icon: '10n',
        isTemperature: true,
        temp: 28.65,
      },
    ];
    const props = {
      screenName: 'Home',
      hourlyWeathers,
    };

    afterEach(() => {
      cleanup();
    });

    it('should render temperature image temperature and temperature when isTemperature is true', () => {
      const imageTemperatureTestID = 'Home_image_temperature';

      const {getByTestId, getByText} = render(<HourlyWeather {...props} />);

      expect(getByTestId(imageTemperatureTestID)).toBeTruthy();
      expect(getByText('29 °C')).toBeTruthy();
    });

    it('should render sun image and sun information when isTemperature is false', () => {
      const falseTemperatureHourlyWeathers = [
        {
          dt: 1711278000,
          icon: 'sunrise',
          isTemperature: false,
          temp: 'Sunrise',
        },
      ];
      const falseTemperatureProps = {
        screenName: 'Home',
        hourlyWeathers: falseTemperatureHourlyWeathers,
      };
      const sunTemperatureTestID = 'Home_sun_temperature';

      const {getByTestId, getByText} = render(
        <HourlyWeather {...falseTemperatureProps} />,
      );

      expect(getByTestId(sunTemperatureTestID)).toBeTruthy();
      expect(getByText('Sunrise')).toBeTruthy();
    });

    it('should render time information when time is not 00:00', () => {
      const {getByText} = render(<HourlyWeather {...props} />);

      expect(getByText('18:00')).toBeTruthy();
    });

    it('should render date information and separator when time is 00:00', () => {
      const midnightHourlyWeathers = [
        {
          ...hourlyWeathers[0],
          dt: 1711126800,
        },
      ];
      const midnightProps = {
        screenName: 'Home',
        hourlyWeathers: midnightHourlyWeathers,
      };
      const separatorTestID = 'Home_separator';

      const {getByText, getByTestId} = render(
        <HourlyWeather {...midnightProps} />,
      );

      expect(getByTestId(separatorTestID)).toBeTruthy();
      expect(getByText('Mar 23')).toBeTruthy();
    });
  });
});
