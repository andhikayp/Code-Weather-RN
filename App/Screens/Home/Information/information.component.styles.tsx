import {StyleSheet} from 'react-native';

import {Color} from '../../../Themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: Color.grey,
    paddingHorizontal: 8,
    paddingVertical: 16,
    margin: 6,
    gap: 10,
    borderRadius: 8,
    rowGap: 16,
  },
  informationContainer: {
    flexDirection: 'row',
  },
  informationItem: {
    fontWeight: '600',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
});
