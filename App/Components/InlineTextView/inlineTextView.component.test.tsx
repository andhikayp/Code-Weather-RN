import {render, fireEvent} from '@testing-library/react-native';

import InlineTextView from './inlineTextView.component';

describe('InlineTextView', () => {
  const props = {
    label: 'label',
    onPress: jest.fn(),
    renderRightItem: jest.fn(),
    screenName: 'Home',
  };

  describe('#render', () => {
    it('should render expected component', () => {
      const {label} = props;
      const {getByText} = render(<InlineTextView {...props} />);

      expect(getByText(label)).toBeTruthy();
    });
  });

  describe('#onPress', () => {
    it('should call onPress when press container', () => {
      const {getByTestId} = render(<InlineTextView {...props} />);

      fireEvent.press(getByTestId('Home_inline'));

      expect(props.onPress).toBeCalled();
    });
  });
});
