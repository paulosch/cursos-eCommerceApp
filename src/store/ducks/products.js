import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  productsLoadRequest: ['categoryId'],
  productsLoadSuccess: ['data'],
  productsLoadFailure: null,
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: false,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCTS_LOAD_REQUEST]: state => state.merge({ loading: true }),
  [Types.PRODUCTS_LOAD_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.PRODUCTS_LOAD_FAILURE]: state => state.merge({ loading: false, error: true }),
});
