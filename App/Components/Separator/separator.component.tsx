import React from 'react';
import {View} from 'react-native';

import styles from './separator.component.styles';
import utils from '../../Utils';

const {testProps} = utils;

const Separator = ({isVertical = true, containerStyle, screenName}) => {
  const additionalStyles = isVertical ? styles.vertical : styles.horizontal;

  return (
    <View
      style={[styles.separator, additionalStyles, containerStyle]}
      {...testProps(`${screenName}_separator`)}
    />
  );
};

export default Separator;
