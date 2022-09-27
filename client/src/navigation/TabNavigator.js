import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavouriteScreen';
import GameDetailsScreen from '../screens/GameDetails.Screen';
import { HomeScreen } from './HomeNavigator';
import HomeNavigator from './HomeNavigator';
import Icon from '../components/common/Icon/Icon';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#AD40AF'},
          tabBarInactiveTintColor: '#fff',
          tabBarActiveTintColor: 'yellow',
        }}>
        <Tab.Screen
          name="Home2"
          component={HomeNavigator}
          options={({route}) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              backgroundColor: '#AD40AF',
            },
            tabBarIcon: ({color, size}) => (
              <Icon name="eye" type="feather" color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarBadge: 3,
            tabBarBadgeStyle: {backgroundColor: 'yellow'},
            tabBarIcon: ({color, size}) => (
                <Icon name="eye" type="feather" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({color, size}) => (
                <Icon name="eye" type="feather" color={color} size={size} />
            ),
          }}
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