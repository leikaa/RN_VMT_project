import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import historyBackground from '../../assets/historyBackground.png';
import React from 'react';

const onItemClickHandler = () => {
  console.log('history item clicked');
};

const window = Dimensions.get('window');

const HistoryItem = ({item}) => (
  <TouchableOpacity
    onPress={onItemClickHandler}
    activeOpacity={1}
  >
    <ImageBackground
      source={historyBackground}
      style={styles.history_container}>
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
          <Text style={styles.history_content_amount_text}>{item.amount}</Text>
        </View>
      </View>
      <View style={styles.history_total_section}>
        <Text style={styles.history_header_text}>Resulting balance</Text>
        <Text style={[styles.history_header_text]}>{item.balance}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

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
    width: window.width - 36,
    alignSelf: 'center',
    marginTop: 5,
  },
  history_container: {
    minHeight: 192,
    borderWidth: 2,
    borderColor: '#f2f2f2',
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
