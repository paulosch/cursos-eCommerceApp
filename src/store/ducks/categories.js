import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  categoriesLoadRequest: null,
  categoriesLoadSuccess: ['data'],
  categoriesLoadFailure: null,
  categoriesToggleActive: ['id'],
});

export const CategoriesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  activeId: null,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORIES_LOAD_SUCCESS]: (state, { data }) => state.merge({ data, activeId: data[0].id }),
  [Types.CATEGORIES_TOGGLE_ACTIVE]: (state, { id }) => state.merge({ activeId: id }),
});
