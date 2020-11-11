import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import {THEME} from '../../../theme';
import UserAccountIcon from '../Icons/UserProfileIcon';
import ProfileItem from '../../Common/ProfileItem';

const window = Dimensions.get('window');

const Header = ({title}) => {
  const {navigate} = useNavigation();
  const name = 'John Doe';
  const accountBalance = '500';

  return (
    <View style={styles.wrapper}>
      <View style={styles.title_container}>
        <View style={styles.icon_profile}>
          <TouchableOpacity
            onPress={() => navigate('Profile')}
          >
            <UserAccountIcon
              color={'#fff'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content_container}>
        <ProfileItem
          style={styles.item_name}
          itemTitle={'Name'}
          itemValue={name}
        />
        <ProfileItem
          style={styles.item_account}
          itemTitle={'Account balance'}
          itemValue={accountBalance}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.DISABLED_COLOR,
    paddingBottom: 10,
  },
  title_container: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: THEME.MAIN_COLOR,
  },
  content_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: window.width - 40,
    alignSelf: 'center',
  },
  icon_profile: {
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 40,
  },
  item_name: {
    width: window.width * 0.5,
    marginHorizontal: 0,
    marginRight: 5,
  },
  item_account: {
    width: window.width * 0.35,
    marginHorizontal: 0,
  },
});

export default Header;
