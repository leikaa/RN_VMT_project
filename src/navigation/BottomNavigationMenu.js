import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {THEME} from '../theme';

import MainScreen from '../containers/MainScreen';
import TransactionsHistoryScreen from '../containers/TransactionsHistoryScreen';

import MainIconActive from '../components/Common/NavigationIcons/MainIconActive';
import MainIconInactive from '../components/Common/NavigationIcons/MainIconInactive';
import HistoryIconActive from '../components/Common/NavigationIcons/HistoryIconActive';
import HistoryIconInactive from '../components/Common/NavigationIcons/HistoryIconInactive';

const BottomNavigationMenu = createBottomTabNavigator({
    MainScreen: {
      screen: MainScreen,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let icon = <MainIconInactive color={THEME.DISABLED_COLOR}/>;
          if (focused) {
            icon = <MainIconActive color={THEME.MAIN_COLOR}/>;
          }

          return icon;
        },
        tabBarLabel: ({focused}) => {
          if (focused) {
            return (
              <View style={styles.navigation_label}>
                <Text style={styles.navigation_text}>Main</Text>
              </View>
            );
          }
        },
      }),
    },

    TransactionsHistoryScreen: {
      screen: TransactionsHistoryScreen,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let icon = <HistoryIconInactive color={THEME.DISABLED_COLOR}/>;
          if (focused) {
            icon = <HistoryIconActive color={THEME.MAIN_COLOR}/>;
          }

          return icon;
        },
        tabBarLabel: ({focused}) => {
          if (focused) {
            return (
              <View style={styles.navigation_label}>
                <Text style={styles.navigation_text}>History</Text>
              </View>
            );
          }
        },
      }),
    },
  },
  {
    tabBarOptions: {
      keyboardHidesTabBar: false,
    },
  },
);

const styles = StyleSheet.create({
  navigation_label: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navigation_text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#04a1d6',
  },
});

export default BottomNavigationMenu;
