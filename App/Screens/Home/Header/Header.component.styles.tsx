import {StyleSheet} from 'react-native';

import {Fonts} from '../../../Themes';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 14,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  inputSearchText: {
    fontSize: Fonts.size.h4,
    fontWeight: 'bold',
    marginLeft: 6,
    flex: 1,
    marginRight: 16,
  },
});

export default styles;
