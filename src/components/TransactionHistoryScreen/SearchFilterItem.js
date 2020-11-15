import {
  Dimensions,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ArrowDownIcon from '../Common/Icons/ArrowDownIcon';
import React from 'react';
import Strings from '../../utils/strings';
import {THEME} from '../../theme';

const window = Dimensions.get('window');

const SearchFilterItem = ({onPressSortItem, isOrderDesc, searchValue, setSearchValue}) => (
  <View style={styles.item_container}>
    <TouchableOpacity
      onPress={onPressSortItem}

      style={styles.item_sort_block}>
      <Text style={styles.item_sort_block_text}>Date</Text>
      <View style={!isOrderDesc && styles.item_sort_block_icon}>
        <ArrowDownIcon color={THEME.MAIN_COLOR}/>
      </View>

    </TouchableOpacity>
    <TextInput
      style={styles.item_filter_input}
      onChangeText={text => setSearchValue(text)}
      placeholderTextColor={THEME.DISABLED_COLOR}
      placeholder={Strings.placeholder_search_filter_item}
      value={searchValue}
    />
  </View>
);

const styles = StyleSheet.create({
  item_container: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginTop: 5,
    height: 46,
    backgroundColor: '#fff',
    width: window.width - 40,
    alignSelf: 'center',
  },
  item_sort_block: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingLeft: 5
  },
  item_sort_block_text: {
    marginRight: 5,
  },
  item_sort_block_icon: {
    transform: [{rotate: '180deg'}],
  },
  item_filter_input: {
    backgroundColor: '#fff',
    color: '#3d3c3e',
    height: 46,
    width: '80%',
    borderLeftWidth: 5,
    borderLeftColor: '#f2f2f2',
    paddingHorizontal: 15,
  },

});

export default SearchFilterItem;
