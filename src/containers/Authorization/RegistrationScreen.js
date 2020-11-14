import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';

import TextInput from '../../components/Common/CommonTextInput';
import {isEmailValid} from '../../helpers/IsEmailValid';
import {isNameValid} from '../../helpers/isNameValid';
import SubmitButton from '../../components/Common/CommonButton';

import {registerUser} from '../../store/actions/registration';

const window = Dimensions.get('window');

const RegistrationScreen = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isEmailNotValid, setIsEmailNotValid] = useState(false);
  const [name, setName] = useState('');
  const [isNameNotValid, setIsNameNotValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordNotEmpty, setIsPasswordNotEmpty] = useState(false);
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isPasswordNotTheSame, setIsPasswordNotTheSame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandler = () => {
    let error = false;

    if (!isEmailValid(email)) {
      setIsEmailNotValid(true);
      error = true;
    }
    if (!isNameValid(name)) {
      setIsNameNotValid(true);
      error = true;
    }
    if (password.length === 0) {
      setIsPasswordNotEmpty(true);
      error = true;
    }
    if (password !== repeatedPassword) {
      setIsPasswordNotTheSame(true);
      error = true;
    }
    if (error) {
      return Keyboard.dismiss();
    }

    setIsLoading(true);
    dispatch(registerUser(name, password, email, navigate, setIsLoading));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TextInput
          title={'Name'}
          message={'Invalid name or format'}
          placeholder={'Name Surname'}
          onChangeValue={setName}
          value={name}
          isError={isNameNotValid}
          setIsError={setIsNameNotValid}
        />
        <TextInput
          title={'Email'}
          message={'Invalid email format'}
          placeholder={'email@sample.com'}
          onChangeValue={setEmail}
          value={email}
          isError={isEmailNotValid}
          setIsError={setIsEmailNotValid}
        />
        <TextInput
          title={'Password'}
          message={'Enter password'}
          onChangeValue={setPassword}
          value={password}
          isError={isPasswordNotEmpty}
          setIsError={setIsPasswordNotEmpty}
          isMasked
        />
        {
          password.length > 0 &&
          <TextInput
            title={'Password repeat'}
            message={'Password must be repeated exactly'}
            onChangeValue={setRepeatedPassword}
            value={repeatedPassword}
            isError={isPasswordNotTheSame}
            setIsError={setIsPasswordNotTheSame}
            isMasked
          />
        }
      </ScrollView>
      <View style={styles.submit_btn_container}>
        <SubmitButton
          title={'Submit'}
          onPress={onSubmitHandler}
          isLoading={isLoading}
          style={styles.submit_btn}
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
  submit_btn_container: {
    alignSelf: 'center',
    marginVertical: 30,
  },
  submit_btn: {
    width: window.width - 40,
  },
});

export default RegistrationScreen;
