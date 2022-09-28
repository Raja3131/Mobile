import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { HomeScreen } from './HomeNavigator';
import HomeNavigator from './HomeNavigator';
import Icon from '../components/common/Icon/Icon';
import appColors from '../styles/appColors';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: appColors.Blue},
          tabBarInactiveTintColor: '#fff',
          tabBarActiveTintColor: 'yellow',
        }}>
        <Tab.Screen
          name="Home2"
          component={HomeNavigator}
          options={({route}) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              backgroundColor: appColors.Blue,
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="home" type="feather" color={color} size={size} />
            ),
          })}
        />
      
      </Tab.Navigator>
    );
  };
  
  const getTabBarVisibility = route => {
    // console.log(route);
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.log(routeName);
  
    if( routeName == 'GameDetails' ) {
      return 'none';
    }
    return 'flex';
  };
  
  export default TabNavigator;