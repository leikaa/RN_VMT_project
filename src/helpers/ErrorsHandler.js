import {Alert} from 'react-native';
import Strings from '../utils/strings';

const ErrorsHandler = (er, message) => {
  if (!er.response) {
    Alert.alert('Connection error', Strings.server_not_available,
      [{text: 'ОК', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}], {cancelable: false});
    return;
  }

  try {
    Alert.alert('An error occurred', er.response.data,
      [{text: 'ОК', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}], {cancelable: false});
  } catch (error) {
    Alert.alert('Error', message,
      [{text: 'ОК', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}], {cancelable: false});
  }
};

export default ErrorsHandler;
