import reduceReducers from 'reduce-reducers';

//Siblings reducers
import treeReducer from './tree-reducer';
import treeItemReducer from './tree-item-reducer';

export default reduceReducers(treeReducer, treeItemReducer);
