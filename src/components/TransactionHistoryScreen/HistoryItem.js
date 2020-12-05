import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {THEME} from '../../theme';
import RepeatIcon from '../Common/Icons/RepeatIcon';
import {updateInitialTransactionData} from '../../store/actions/main';
import {useNavigation} from 'react-navigation-hooks';

const HistoryItem = ({item}) => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const onRepeatTransactionClickHandler = () => {
    Alert.alert('Copy transaction data', 'Do you want to use this transaction as a template for a new transfer?',
      [
        {
          text: 'OK', onPress: () => {
            dispatch(updateInitialTransactionData(item.username, isCreditTransaction(item.amount) ? item.amount.toString() : item.amount.toString().substring(1)));
            navigate('MainScreen');
          },
        },
        {text: 'CANCEL', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ], {cancelable: false});
  };

  const isCreditTransaction = (transactionAmount) => {
    let isCreditTransaction = true;
    if (Math.sign(+transactionAmount) === -1) {
      isCreditTransaction = false;
    }

    return isCreditTransaction;
  };

  return (
    <View style={styles.history_container}>
      <View style={styles.history_header_section}>
        <View style={styles.history_header_item}>
          <Text style={styles.history_header_text}>{item.date}</Text>
          <TouchableOpacity onPress={onRepeatTransactionClickHandler}>
            <RepeatIcon color={THEME.MAIN_COLOR}/>
          </TouchableOpacity>
        </View>
        <View style={styles.history_header_item}>
          <View style={styles.history_header_correspondent}>
            <Text style={styles.history_header_correspondent_title}>Correspondent Name</Text>
            <Text style={styles.history_header_correspondent_text}>{item.username}</Text>
          </View>
        </View>
      </View>
      <View style={styles.history_content_section}>
        <View style={styles.history_content_amount}>
          <Text style={styles.history_content_amount_title}>Transaction amount</Text>
          <Text
            style={[styles.history_content_amount_text, isCreditTransaction(item.amount) ? {color: THEME.SUCCESS_COLOR} : {color: THEME.WARNING_COLOR}]}>
            {item.amount}
          </Text>
        </View>
      </View>
      <View style={styles.history_total_section}>
        <Text style={styles.history_header_text}>Resulting balance</Text>
        <Text style={[styles.history_header_text]}>{item.balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  history_container: {
    minHeight: 192,
    borderBottomWidth: 10,
    borderColor: '#f2f2f2',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  history_header_section: {
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    paddingBottom: 10,
  },
  history_header_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  history_header_text: {
    color: '#3d3c3e',
    fontSize: 14,
    fontWeight: 'bold',
  },
  history_header_correspondent: {
    width: '100%',
  },
  history_header_correspondent_title: {
    color: '#95a9bb',
    fontSize: 10,
    fontWeight: '400',
  },
  history_header_correspondent_text: {
    color: '#3d3c3e',
    fontSize: 14,
  },
  history_content_section: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  history_content_amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  history_content_amount_title: {
    color: '#95a9bb',
    fontSize: 14,
    fontWeight: '300',
    width: '70%',
  },
  history_content_amount_text: {
    color: '#3d3c3e',
    fontSize: 14,
    fontWeight: '300',
  },
  history_total_section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default HistoryItem;
