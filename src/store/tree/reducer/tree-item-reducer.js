import update from 'immutability-helper';

import { handleActions } from 'redux-actions';

import { initialState } from './initialize-state';
import {
  MOVE_TREE_ITEM,
  MOVE_TREE_ITEM_SUCCESS,
  MOVE_TREE_ITEM_ERROR,
  ADD_TREE_ITEM,
  ADD_TREE_ITEM_SUCCESS,
  ADD_TREE_ITEM_ERROR,
  UPDATE_TREE_ITEM,
  UPDATE_TREE_ITEM_SUCCESS,
  UPDATE_TREE_ITEM_ERROR,
  DELETE_TREE_ITEM,
  DELETE_TREE_ITEM_SUCCESS,
  DELETE_TREE_ITEM_ERROR,
} from '../type';

const treeItemReducer = handleActions(
  // @ts-ignore
  new Map([
    [
      MOVE_TREE_ITEM,
      (state, action) => {
        return update(state, {
          loading: { $set: true },
        });
      },
    ],
    [
      MOVE_TREE_ITEM_SUCCESS,
      (state, action) => {
        return update(state, {
          data: { $set: action.payload },
          loading: { $set: false },
        });
      },
    ],
    [
      MOVE_TREE_ITEM_ERROR,
      (state, action) => {
        return update(state, {
          data: { $set: action.payload },
        });
      },
    ],
    [
      ADD_TREE_ITEM,
      (state, action) => {
        return update(state, {
          loadingStatus: {
            treeDataLoading: { $set: true },
          },
        });
      },
    ],
    [
      ADD_TREE_ITEM_SUCCESS,
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
      ADD_TREE_ITEM_ERROR,
      (state, action) => {
        return update(state, {
          loadingStatus: {
            treeDataLoading: { $set: false },
          },
        });
      },
    ],
    [
      UPDATE_TREE_ITEM,
      (state, action) => {
        return update(state, {
          loadingStatus: {
            treeDataLoading: { $set: true },
          },
        });
      },
    ],
    [
      UPDATE_TREE_ITEM_SUCCESS,
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
      UPDATE_TREE_ITEM_ERROR,
      (state, action) => {
        return update(state, {
          loadingStatus: {
            treeDataLoading: { $set: false },
          },
        });
      },
    ],
    [
      DELETE_TREE_ITEM,
      (state, action) => {
        return update(state, {
          loadingStatus: {
            treeDataLoading: { $set: true },
          },
        });
      },
    ],
    [
      DELETE_TREE_ITEM_SUCCESS,
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
      DELETE_TREE_ITEM_ERROR,
      (state, action) => {
        return update(state, {
          loadingStatus: {
            treeDataLoading: { $set: false },
          },
        });
      },
    ],
  ]),
  initialState,
);
export default treeItemReducer;
