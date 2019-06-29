import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';
import ProductsActions from '~store/ducks/products';

function* loadProducts(categorieId) {
  yield put(ProductsActions.productsLoadRequest(categorieId));
}

export function* loadCategories() {
  try {
    const response = yield call(api.get, '/categories');
    yield put(CategoriesActions.categoriesLoadSuccess(response.data));

    yield loadProducts(response.data[0].id);
  } catch (err) {
    yield put(CategoriesActions.categoriesLoadFailure);
  }
}

export function* toggleActiveCategorie({ id }) {
  yield loadProducts(id);
}
