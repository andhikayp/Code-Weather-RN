import React from 'react';
import {View} from 'react-native';

import styles from './separator.component.styles';

const Separator = ({isVertical = true, containerStyle}) => {
  const additionalStyles = isVertical ? styles.vertical : styles.horizontal;

  return <View style={[styles.separator, additionalStyles, containerStyle]} />;
};

export default Separator;
