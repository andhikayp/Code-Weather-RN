import {StyleSheet} from 'react-native';

import {Color} from '../../Themes';

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'stretch',
    backgroundColor: Color.grey,
  },
  vertical: {
    width: 1.5,
  },
  horizontal: {
    height: 1.5,
  },
  inlineContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 12,
    alignItems: 'center',
  },
  leftInlineContainer: {
    alignItems: 'center',
  },
  rightInlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
