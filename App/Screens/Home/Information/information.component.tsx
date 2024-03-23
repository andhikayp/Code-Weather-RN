import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './information.component.styles';
import config from './information.config';
import i18n from '../../../Utils/locale/i18n';
import {Images} from '../../../Themes';

const {mappingInformation} = config;

const Information = props => {
  const {screenName, currentWeather} = props;

  const informations = mappingInformation(currentWeather);

  const renderInformationItem = (item, index) => {
    const {key, value, compassDirection, rotate} = item;

    const renderRotateIcon = () => (
      <Image
        style={styles.arrowIcon}
        source={Images.navigationArrow}
        transform={[{rotate: `${rotate}deg`}]}
      />
    );

    return (
      <View key={index} style={styles.informationContainer}>
        <Text style={styles.informationItem}>
          {i18n.t(`${screenName}-information-${key}`, {
            value,
            compassDirection,
          })}
        </Text>
        {rotate && renderRotateIcon()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {informations.map(renderInformationItem)}
    </View>
  );
};

export default Information;
