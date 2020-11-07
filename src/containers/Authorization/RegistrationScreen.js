import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Registration screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default RegistrationScreen;
