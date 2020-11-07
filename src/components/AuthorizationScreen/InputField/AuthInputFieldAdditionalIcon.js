import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import InfoShowIcon from '../../Common/Icons/InfoShowIcon';
import InfoHideIcon from '../../Common/Icons/InfoHideIcon';

const AuthInputFieldAdditionalIcon = ({isMasked, onPress}) => {
  const additionalFieldIcon = isMasked ? <InfoShowIcon onPress={onPress}/> :
    <InfoHideIcon onPress={onPress}/>;

  return (
    <View style={styles.additional_icon}>
      {additionalFieldIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  additional_icon: {
    position: 'absolute',
    top: 24,
    right: 15,
    zIndex: 15,
  },
});

export default AuthInputFieldAdditionalIcon;
