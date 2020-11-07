import React, {useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

import {THEME} from '../../theme';

const CommonTextInput = ({title, message, onChangeValue, value, isError = false, setIsError, keyboardType = 'default', placeholder}) => {
  const focusOnElement = useRef(null);

  return (
    <View style={styles.input_container}>
      <Text
        style={[styles.input_title, isError && {color: THEME.WARNING_COLOR}]}
        onPress={() => focusOnElement.current.focus()}
      >
        {title}
      </Text>
      <TextInput
        style={[styles.input, {borderBottomColor: isError ? THEME.WARNING_COLOR : THEME.MAIN_COLOR}]}
        keyboardType={keyboardType}
        ref={focusOnElement}
        onChangeText={text => {
          if (isError) {
            setIsError(false);
          }
          onChangeValue(text);
        }}
        value={value}
        placeholderTextColor={THEME.DISABLED_COLOR}
        placeholder={placeholder}
        autoCorrect={false}
      />
      {
        isError &&
        <Text style={styles.warning_message}>{message}</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  input_container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  input_title: {
    fontSize: 12,
    color: '#545355',
    fontWeight: '300',
    paddingLeft: 15,
    backgroundColor: '#f1f1f1',
    paddingTop: 10,
  },
  input: {
    height: 30,
    borderColor: '#f1f1f1',
    borderWidth: 2,
    backgroundColor: '#f1f1f1',
    fontSize: 16,
    color: '#3d3c3e',
    fontWeight: '400',
    paddingLeft: 15,
    paddingBottom: 10,
    paddingTop: 0,
  },
  warning_message: {
    fontSize: 12,
    color: THEME.WARNING_COLOR,
    fontWeight: '300',
    marginLeft: 15,
  },
});

export default CommonTextInput;
