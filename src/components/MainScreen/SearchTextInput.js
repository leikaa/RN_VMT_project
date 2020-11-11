import React, {useRef} from 'react';
import {Text, TextInput, View, StyleSheet, Dimensions} from 'react-native';
import {THEME} from '../../theme';

const window = Dimensions.get('window');

const SearchTextInput = ({userToFind, setUserToFind, setUserListVisibility, usersList, setFilteredUserData, isError, message, setIsNameNotValid}) => {
  const focusOnElement = useRef(null);

  const changeTextHandler = (text) => {
    if (isError) {
      setIsNameNotValid(false);
    }

    if (!text.length) {
      setUserToFind('');
      setUserListVisibility(false);
    } else {
      setUserToFind(text);
      searchUserFilter(text);
      setUserListVisibility(true);
    }
  };

  const searchUserFilter = text => {
    const newData = usersList.filter(item => {
      const userInitialData = `${item.name.toUpperCase()}`;
      const userCurrentData = text.toUpperCase();
      return userInitialData.indexOf(userCurrentData) === 0;
    });
    setFilteredUserData(newData);
  };

  return (
    <View style={styles.searchbar_wrapper}>
      <View style={styles.searchbar_container}>
        <Text
          style={styles.searchbar_title}
          onPress={() => focusOnElement.current.focus()}
        >
          {'Select a payment recipient'}
        </Text>
        <TextInput
          style={[styles.searchbar_input, {borderBottomColor: isError ? THEME.WARNING_COLOR : THEME.MAIN_COLOR}]}
          placeholder="Name"
          onChangeText={text => changeTextHandler(text)}
          value={userToFind}
          ref={focusOnElement}
          onSubmitEditing={() => setUserListVisibility(false)}
        />
        {
          isError &&
          <Text style={styles.warning_message}>{message}</Text>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar_wrapper: {
    position: 'relative',
  },
  searchbar_container: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: window.width - 40,
    marginTop: 20,
    marginHorizontal: 20,
    position: 'relative',
  },
  searchbar_title: {
    fontSize: 12,
    color: '#545355',
    fontWeight: '300',
    paddingLeft: 15,
    backgroundColor: '#f1f1f1',
    paddingTop: 10,
  },
  searchbar_input: {
    height: 40,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    backgroundColor: '#f1f1f1',
    fontSize: 16,
    color: '#3d3c3e',
    fontWeight: '400',
    paddingLeft: 15,
    paddingTop: 5,
  },
  warning_message: {
    position: 'absolute',
    top: 66,
    fontSize: 12,
    color: THEME.WARNING_COLOR,
    fontWeight: '300',
    marginLeft: 15,
  },
});

export default SearchTextInput;
