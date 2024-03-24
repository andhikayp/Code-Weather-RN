import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';

import i18n from '../../../Utils/locale/i18n';
import {Images, useTheme} from '../../../Themes';
import styles from './Loading.component.styles';

const Loading = ({screenName}) => {
  const {theme} = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.primary,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <Text>{i18n.t(`${screenName}-loading`)}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>{i18n.t(`${screenName}-apps`)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Loading;
