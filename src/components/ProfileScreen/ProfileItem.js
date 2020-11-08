import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ProfileItem = ({itemTitle, itemValue}) => (
  <View style={styles.item_container}>
    <View>
      <Text style={styles.item_title}>{itemTitle}</Text>
      <Text style={styles.item_value}>
        {itemValue}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item_container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 15,
  },
  item_title: {
    fontSize: 14,
    fontWeight: '300',
    color: 'rgba(61,60,62,0.5)',
    marginLeft: 10,
  },
  item_value: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(61,60,62,1)',
    marginLeft: 10,
    paddingRight: 18,
  },
});

export default ProfileItem;
