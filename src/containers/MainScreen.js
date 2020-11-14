import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {THEME} from '../theme';
import Header from '../components/Common/Header/Header';
import SearchTextInput from '../components/MainScreen/SearchTextInput';
import CustomTextInput from '../components/Common/CommonTextInput';
import SubmitButton from '../components/Common/CommonButton';
import {isNameValid} from '../helpers/isNameValid';
import {getCorrectAmount} from '../helpers/getCorrectAmount';
import {createTransaction} from '../store/actions/main';

const window = Dimensions.get('window');

const MainScreen = () => {
  const token = useSelector(state => state.Authorization.token);
  const filteredUsersList = useSelector(state => state.Main.usersList);
  const balance = useSelector(state => state.Profile.balance);

  const dispatch = useDispatch();
  const [userToFind, setUserToFind] = useState('');
  const [userListVisibility, setUserListVisibility] = useState(false);
  const [amountToTransfer, setAmountToTransfer] = useState('');
  const [isAmountToTransferNotValid, setIsAmountToTransferNotValid] = useState(false);
  const [isNameNotValid, setIsNameNotValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onListItemClickHandler = (user) => {
    Keyboard.dismiss();
    setUserToFind(user.name);
    setUserListVisibility(false);
  };

  const onSubmitHandler = () => {
    let error = false;

    if (!isNameValid(userToFind)) {
      setIsNameNotValid(true);
      error = true;
    }

    if (+amountToTransfer <= 0 || +balance < +amountToTransfer) {
      error = true;
      setIsAmountToTransferNotValid(true);
    }

    if (error) {
      return false;
    }

    setIsLoading(true);
    dispatch(createTransaction(token, userToFind, amountToTransfer, setIsLoading));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Main'}
      />
      <ScrollView
        style={styles.content_container}
        keyboardShouldPersistTaps={'handled'}
      >
        <SearchTextInput
          userToFind={userToFind}
          setUserToFind={setUserToFind}
          setUserListVisibility={setUserListVisibility}
          isError={isNameNotValid}
          setIsNameNotValid={setIsNameNotValid}
          message={'Invalid name or format'}
        />
        {
          userListVisibility && filteredUsersList.length > 0 ?
            <ScrollView
              style={styles.items_list_wrapper}
              nestedScrollEnabled
              keyboardShouldPersistTaps={'handled'}
            >
              {
                filteredUsersList.map(item => (
                  <TouchableWithoutFeedback
                    onPress={() => onListItemClickHandler(item)}
                    key={item.id.toString()}
                  >
                    <View style={styles.item_wrapper}>
                      <Text>{item.name}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                ))
              }
            </ScrollView>
            :
            null
        }
        <View style={styles.bottom_content_container}>
          <CustomTextInput
            style={styles.bottom_input_transfer_amount}
            title={'Transfer amount'}
            message={'Invalid amount'}
            onChangeValue={setAmountToTransfer}
            value={getCorrectAmount(amountToTransfer)}
            isError={isAmountToTransferNotValid}
            setIsError={setIsAmountToTransferNotValid}
            keyboardType={'decimal-pad'}
          />
          <SubmitButton
            title={'Submit'}
            onPress={onSubmitHandler}
            isLoading={isLoading}
            style={styles.bottom_submit_button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content_container: {
    flex: 1,
    position: 'relative',
  },
  items_list_wrapper: {
    position: 'absolute',
    top: 86,
    zIndex: 10,
    minHeight: 42,
    maxHeight: 90,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    width: window.width - 40,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  items_list: {
    height: 90,
  },
  item_wrapper: {
    paddingLeft: 15,
    paddingVertical: 10,
    borderBottomColor: THEME.DISABLED_COLOR,
    borderBottomWidth: 1,
  },
  bottom_content_container: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: window.width - 40,
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 26,
    marginBottom: 20,
  },
  bottom_input_transfer_amount: {
    width: window.width * 0.6,
    marginHorizontal: 0,
    marginTop: 0,
  },
  bottom_submit_button: {
    width: window.width * 0.25,
    borderRadius: 0,
    height: 56,
  },
});

export default MainScreen;
