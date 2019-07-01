import { all, takeLatest } from 'redux-saga/effects';

import { CategoriesTypes } from '~/store/ducks/categories';
import { loadCategories, toggleActiveCategorie } from './categories';

import { ProductsTypes } from '~/store/ducks/products';
import { loadProducts } from './products';

import { CartTypes } from '~/store/ducks/cart';
import { addProduct } from './cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.CATEGORIES_LOAD_REQUEST, loadCategories),
    takeLatest(CategoriesTypes.CATEGORIES_TOGGLE_ACTIVE, toggleActiveCategorie),
    takeLatest(ProductsTypes.PRODUCTS_LOAD_REQUEST, loadProducts),
    takeLatest(CartTypes.ADD_PRODUCT_REQUEST, addProduct),
  ]);
}
