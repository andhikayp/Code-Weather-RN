import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './Header.component.styles';
import utils from '../../../Utils';
import {Images} from '../../../Themes';
import i18n from '../../../Utils/locale/i18n';

const {testProps} = utils;

const Header = props => {
  const {screenName} = props;

  return (
    <View style={styles.container} {...testProps(`${screenName}_header`)}>
      <View style={styles.searchContainer}>
        <Image
          source={Images.search}
          style={styles.icon}
          {...testProps(`${screenName}_search_image`)}
        />
        <Text style={[styles.inputSearchText]} numberOfLines={1}>
          {i18n.t('Header-address')}
        </Text>
      </View>
      <View>
        <Image
          source={Images.setting}
          style={styles.icon}
          {...testProps(`${screenName}_setting_image`)}
        />
      </View>
    </View>
  );
};

export default Header;
