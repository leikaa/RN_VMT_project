import React from 'react';
import {AppNavigation} from '../navigation/AppNavigation';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

const AppWithNavigationState = () => {
  return (
    <View style={styles.safe_area}>
      <StatusBar barStyle='light-content'/>
      <AppNavigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppWithNavigationState;
