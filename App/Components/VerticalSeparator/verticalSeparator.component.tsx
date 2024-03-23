import React from 'react';
import {View, StyleSheet} from 'react-native';

const VerticalSeparator = ({width = 0.8, color = 'grey', style}) => {
  return (
    <View style={[styles.separator, {width, backgroundColor: color}, style]} />
  );
};

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'stretch',
  },
});

export default VerticalSeparator;
