import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadPage: ['page'],
});

export const PagesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  actualPage: null,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PAGE]: (state, { page }) => state.merge({ actualPage: page }),
});
