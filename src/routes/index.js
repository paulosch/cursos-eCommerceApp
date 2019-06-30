import { createAppContainer, createStackNavigator } from 'react-navigation';

import { colors } from '~/styles';

import Home from '~/pages/Home';
import Detail from '~/pages/Detail';
import Cart from '~/pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
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
        screen: Cart,
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
  ),
);

export default Routes;
