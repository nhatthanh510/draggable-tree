import { combineReducers } from 'redux';

import treeReducer from './tree/reducer';

export default combineReducers({
  tree: treeReducer,
});
