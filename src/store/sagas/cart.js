import { select, put } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';

import CartActions from '~/store/ducks/cart';

const getCartData = state => state.cart.data;

export function* addProduct({ product }) {
  try {
    const stateData = yield select(getCartData);
    const data = [...stateData];

    const productIndex = data.findIndex(productCart => productCart.id === product.id);

    if (productIndex > -1) {
      const { qty } = data[productIndex];
      data[productIndex] = { ...data[productIndex], qty: qty + 1 };
    } else {
      const newProduct = { ...product, qty: 1 };
      data.push(newProduct);
    }

    yield put(CartActions.addProductSuccess(data));

    ToastAndroid.show('Produto adicionado ao carrinho!', ToastAndroid.SHORT);
  } catch (err) {
    yield put(CartActions.addProductFailure());
  }
}
