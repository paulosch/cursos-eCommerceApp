import { combineReducers } from 'redux';

import { reducer as categories } from './categories';
import { reducer as products } from './products';
import { reducer as pages } from './pages';

export default combineReducers({
  categories,
  products,
  pages,
});
