import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {THEME} from '../../theme';

const HistoryItem = ({item}) => {
  const onItemClickHandler = () => {
    console.log('history item clicked', item.id);
  };

  const isCreditTransaction = (transactionAmount) => {
    let isCreditTransaction = true;
    if (Math.sign(+transactionAmount) === -1) {
      isCreditTransaction = false;
    }

    return isCreditTransaction;
  };

  return (
    <TouchableOpacity
      onPress={onItemClickHandler}
      activeOpacity={1}
      style={styles.history_container}
    >
      <View style={styles.history_header_section}>
        <View style={styles.history_header_item}>
          <Text style={styles.history_header_text}>{item.date}</Text>
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
    </TouchableOpacity>
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
