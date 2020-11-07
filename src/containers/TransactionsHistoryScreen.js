import React from 'react';
import {
  View,
  Text,
  StyleSheet, SafeAreaView,
} from 'react-native';
import Header from '../components/Common/Header/Header';

const TransactionsHistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'History'}
      />
      <View style={styles.content_container}>
        <Text>History screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content_container: {
    flex: 1,
  },
});

export default TransactionsHistoryScreen;
