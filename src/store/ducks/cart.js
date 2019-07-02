import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  addProductRequest: ['product'],
  addProductSuccess: ['data'],
  addProductFailure: null,
  handleChangeQty: ['products'],
  removeProduct: ['product'],
});

export const CartTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: false,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT_REQUEST]: state => state.merge({ loading: true }),
  [Types.ADD_PRODUCT_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.ADD_PRODUCT_FAILURE]: state => state.merge({ error: true, loading: false }),
  [Types.HANDLE_CHANGE_QTY]: (state, { data }) => state.merge({ data }),
  [Types.REMOVE_PRODUCT]: (state, { product }) => state.merge({ data: state.data.find(item => item.id !== product.id) }),
});
