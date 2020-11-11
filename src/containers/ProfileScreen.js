import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import ProfileItem from '../components/Common/ProfileItem';
import SubmitButton from '../components/Common/CommonButton';

const window = Dimensions.get('window');

const ProfileScreen = () => {
  const {navigate} = useNavigation();
  const email = 'email@sample.com';
  const name = 'John Smith';

  const onSubmitHandler = () => {
    //todo clear data
    navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content_container}>
        <ProfileItem
          itemTitle={'Name'}
          itemValue={name}
        />
        <ProfileItem
          itemTitle={'Email'}
          itemValue={email}
        />
      </View>

      <View style={styles.logout_btn_container}>
        <SubmitButton
          title={'Logout'}
          onPress={onSubmitHandler}
          style={styles.logout_btn}
        />
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
    height: 70,
    flex: 1,
  },
  logout_btn_container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  logout_btn: {
    width: window.width - 40,
  },
});

export default ProfileScreen;
