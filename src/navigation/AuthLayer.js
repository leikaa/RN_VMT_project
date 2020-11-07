import {createStackNavigator} from 'react-navigation-stack';

import {THEME} from '../theme';
import AuthorizationScreen from '../containers/Authorization/AuthorizationScreen';
import RegistrationScreen from '../containers/Authorization/RegistrationScreen';

const AuthLayer = createStackNavigator({
    Login: {
      screen: AuthorizationScreen,
      navigationOptions: ({
        headerShown: false,
        headerBackTitle: null,
      }),
    },
    Register: {
      screen: RegistrationScreen,
      navigationOptions: () => ({
        headerBackTitle: null,
      }),
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
      },
      headerTintColor: '#fff',
    },
  },
);

export default AuthLayer;
