import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';

import {THEME} from '../../theme';
import InputField from '../../components/AuthorizationScreen/InputField/AuthInputField';
import SubmitButton from '../../components/Common/CommonButton';
import {authorizeUser} from '../../store/actions/authorization';

const window = Dimensions.get('window');

const AuthorizationScreen = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isMasked, setIsMasked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = () => {
    setIsLoading(true);
    dispatch(authorizeUser(login, password, navigate, setIsLoading));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <InputField
          placeholder={'Email'}
          value={login}
          setValue={setLogin}
          icon={'email'}
          keyboardType={'email-address'}
        />
        <InputField
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          icon={'lock'}
          additionalIcon={'true'}
          isMasked={isMasked}
          setMasked={setIsMasked}
        />
        <TouchableOpacity
          style={styles.sign_up_btn}
          onPress={() => navigate('Register')}
        >
          <Text style={styles.sign_up_btn_text}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sign_in_btn_container}>
        <SubmitButton
          title={'Sign in'}
          onPress={onSubmitHandler}
          isLoading={isLoading}
          style={styles.sign_in_btn}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  sign_up_btn: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 15,
  },
  sign_up_btn_text: {
    color: THEME.MAIN_COLOR,
    fontWeight: '700',
  },
  sign_in_btn_container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
  },
  sign_in_btn: {
    width: window.width - 40,
  },
});

export default AuthorizationScreen;
