import {createStackNavigator} from 'react-navigation-stack';

import BottomNavigationMenu from './BottomNavigationMenu';
import ProfileScreen from '../containers/ProfileScreen';

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
  }
);

export default MainLayer;
