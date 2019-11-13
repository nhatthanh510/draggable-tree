import update from 'immutability-helper';

import { handleActions } from 'redux-actions';
import { initialState } from './initialize-state';
import {
  LOAD_TREE_DATA,
  LOAD_TREE_DATA_SUCCESS,
  LOAD_TREE_DATA_ERROR,
} from '../type';

const treeReducer = handleActions(
  // @ts-ignore
  new Map([
    [
      LOAD_TREE_DATA,
      (state, action) => {
        return update(state, {
          loadingStatus: {
            treeDataLoading: { $set: true },
          },
        });
      },
    ],
    [
      LOAD_TREE_DATA_SUCCESS,
      (state, action) => {
        return update(state, {
          data: { $set: action.payload },
          loadingStatus: {
            treeDataLoading: { $set: false },
          },
        });
      },
    ],
    [
      LOAD_TREE_DATA_ERROR,
      (state, action) => {
        return update(state, {
          data: { $set: action.payload },
          loadingStatus: {
            treeDataLoading: { $set: false },
          },
        });
      },
    ],
  ]),
  initialState,
);
export default treeReducer;
