import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../components/Common/Header/Header';
import HistoryItem from '../components/TransactionHistoryScreen/HistoryItem';
import Preloader from '../components/Common/Preloader';
import {getTransactionsHistory} from '../store/actions/history';

const window = Dimensions.get('window');

const TransactionsHistoryScreen = () => {
  const userTransactionHistory = useSelector(state => state.History.transactionsHistory);
  const token = useSelector(state => state.Authorization.token);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getTransactionsHistory(token, setIsLoading));
  }, [userTransactionHistory]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'History'}
      />
      {
        isLoading &&
        <Preloader/>
      }
      {
        !isLoading &&
        <View style={styles.content_container}>
          {
            userTransactionHistory.length > 0 ?
              <FlatList
                data={userTransactionHistory}
                style={styles.items_list}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                  <HistoryItem item={item}/>
                )}
                keyExtractor={item => item.id.toString()}

                initialNumToRender={10}
                updateCellsBatchingPeriod={50}
                maxToRenderPerBatch={10}
                windowSize={16}
              />
              :
              <View style={styles.no_history}>
                <Text>You dont have any transactions</Text>
              </View>
          }
        </View>
      }
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
    backgroundColor: '#f2f2f2',
  },
  items_list: {
    backgroundColor: '#f2f2f2',
    width: window.width - 40,
    alignSelf: 'center',
  },
  no_history: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransactionsHistoryScreen;
