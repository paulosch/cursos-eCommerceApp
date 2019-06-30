import React from 'react';

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '~/styles';

import Home from '~/pages/Home';
import Detail from '~/pages/Detail';
import Cart from '~/pages/Cart';

const BottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => <Icon size={25} name="home" color={tintColor} />,
      }),
    },
    Cart: {
      screen: Cart,
      navigationOptions: () => ({
        title: 'Carrinho',
        tabBarIcon: ({ tintColor }) => <Icon size={25} name="shopping-cart" color={tintColor} />,
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primary,
      showLabel: false,
      showIcon: true,
    },
  },
);

const stack = createStackNavigator(
  {
    Home: {
      screen: BottomTab,
      navigationOptions: () => ({
        title: 'Go Commerce',
      }),
    },
    Detail: {
      screen: Detail,
      navigationOptions: () => ({
        title: 'Detalhes do produto',
      }),
    },
    Cart: {
      screen: BottomTab,
      navigationOptions: () => ({
        title: 'Carrinho',
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTintColor: colors.primary,
    },
  },
);

const Routes = createAppContainer(stack);

export default Routes;
