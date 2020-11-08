import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import TextInput from '../../components/Common/CommonTextInput';
import {isEmailValid} from '../../helpers/IsEmailValid';
import {isNameValid} from '../../helpers/isNameValid';
import SubmitButton from '../../components/Common/CommonButton';
import {useNavigation} from 'react-navigation-hooks';

const window = Dimensions.get('window');

const RegistrationScreen = () => {
  const {navigate} = useNavigation();
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
    if (!isEmailValid(email)) {
      setIsEmailNotValid(true);
    }
    if (!isNameValid(name)) {
      setIsNameNotValid(true);
    }
    if (password.length === 0) {
      setIsPasswordNotEmpty(true);
    }
    if (password !== repeatedPassword) {
      setIsPasswordNotTheSame(true);
    }
    if (isEmailNotValid || isNameNotValid || isPasswordNotEmpty || isPasswordNotTheSame) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('Authorized');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TextInput
          title={'Name'}
          message={'Invalid name or format'}
          placeholder={'FirstName LastName'}
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
