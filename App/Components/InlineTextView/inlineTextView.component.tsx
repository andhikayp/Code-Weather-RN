import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './inlineTextView.component.styles';
import {Separator} from '../Separator';

const InlineTextView = props => {
  const {
    renderRightItem,
    onPress,
    isDisabled = false,
    label,
    containerStyle,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled}>
      <View style={[styles.inlineContainer, containerStyle]}>
        <View style={styles.leftInlineContainer}>
          <Text>{label}</Text>
        </View>
        <View style={styles.rightInlineContainer}>{renderRightItem()}</View>
      </View>
      <Separator isVertical={false} />
    </TouchableOpacity>
  );
};

export default InlineTextView;
