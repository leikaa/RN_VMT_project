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
import moment from 'moment';

import Header from '../components/Common/Header/Header';
import HistoryItem from '../components/TransactionHistoryScreen/HistoryItem';
import Preloader from '../components/Common/Preloader';
import SearchFilterItem from '../components/TransactionHistoryScreen/SearchFilterItem';
import {getTransactionsHistory} from '../store/actions/history';

const window = Dimensions.get('window');

const TransactionsHistoryScreen = () => {
  const userTransactionHistory = useSelector(state => state.History.transactionsHistory);
  const balance = useSelector(state => state.Profile.balance);
  const token = useSelector(state => state.Authorization.token);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isDescOrder, setIsDescOrder] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(getTransactionsHistory(token, setIsLoading));
  }, [balance]);

  const sortData = (data, orderDesc) => {
    if (orderDesc) {
      data.sort((a, b) => new moment(b.date).format('YYYYMMDDHmmss') - new moment(a.date).format('YYYYMMDDHmmss'));
    } else {
      data.sort((a, b) => new moment(a.date).format('YYYYMMDDHmmss') - new moment(b.date).format('YYYYMMDDHmmss'));
    }

    return data;
  };

  const sortItemClickHandler = () => {
    setIsDescOrder(!isDescOrder);
  };

  const filteredData = text => {
    const initialData = sortData(userTransactionHistory, isDescOrder);

    return initialData.filter(item => {
      const itemData = `${item.username.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) === 0;
    });
  };

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
        <View style={styles.content_wrapper}>
          {
            userTransactionHistory.length > 0 ?
              <View tyle={styles.content_container}>
                <SearchFilterItem
                  onPressSortItem={sortItemClickHandler}
                  isOrderDesc={isDescOrder}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
                <FlatList
                  data={filteredData(searchValue)}
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
              </View>
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
  content_wrapper: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  content_container: {
    width: window.width - 40,
    alignSelf: 'center',
  },
  items_list: {
    backgroundColor: '#f2f2f2',
    width: window.width - 40,
    alignSelf: 'center',
    marginTop: 10, marginBottom: 55,
  },
  no_history: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransactionsHistoryScreen;
