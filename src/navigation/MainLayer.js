import {createStackNavigator} from 'react-navigation-stack';

import BottomNavigationMenu from './BottomNavigationMenu';
import ProfileScreen from '../containers/ProfileScreen';
import {THEME} from '../theme';

const MainLayer = createStackNavigator({
    Main: {
      screen: BottomNavigationMenu,
      navigationOptions: ({
        headerShown: false,
        headerBackTitle: null,
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({
        headerBackTitle: null,
      }),
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: THEME.MAIN_COLOR,
      },
      headerTintColor: '#fff',
    },
  },
);

export default MainLayer;
