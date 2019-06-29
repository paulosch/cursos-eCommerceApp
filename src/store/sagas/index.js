import { all, takeLatest } from 'redux-saga/effects';

import { CategoriesTypes } from '~/store/ducks/categories';
import { loadCategories, toggleActiveCategorie } from './categories';

import { ProductsTypes } from '~/store/ducks/products';
import { loadProducts } from './products';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.CATEGORIES_LOAD_REQUEST, loadCategories),
    takeLatest(CategoriesTypes.CATEGORIES_TOGGLE_ACTIVE, toggleActiveCategorie),
    takeLatest(ProductsTypes.PRODUCTS_LOAD_REQUEST, loadProducts),
  ]);
}
