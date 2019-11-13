import { createAction } from 'redux-actions';
import {
  LOAD_TREE_DATA,
  LOAD_TREE_DATA_SUCCESS,
  LOAD_TREE_DATA_ERROR,
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
} from 'store/tree/type';

//Loading initial data
export const loadTreeDataAction = createAction(LOAD_TREE_DATA);
export const loadTreeDataSuccessAction = createAction(LOAD_TREE_DATA_SUCCESS);
export const loadTreeDataErrorAction = createAction(LOAD_TREE_DATA_ERROR);

//Move
export const moveTreeItemAction = createAction(MOVE_TREE_ITEM);
export const moveTreeItemSuccessAction = createAction(MOVE_TREE_ITEM_SUCCESS);
export const moveTreeItemErrorAction = createAction(MOVE_TREE_ITEM_ERROR);

//Adding
export const addTreeItemAction = createAction(ADD_TREE_ITEM);
export const addTreeItemSuccessAction = createAction(ADD_TREE_ITEM_SUCCESS);
export const addTreeItemErrorAction = createAction(ADD_TREE_ITEM_ERROR);

//Updating
export const updateTreeItemAction = createAction(UPDATE_TREE_ITEM);
export const updateTreeItemSuccessAction = createAction(
  UPDATE_TREE_ITEM_SUCCESS,
);
export const updateTreeItemErrorAction = createAction(UPDATE_TREE_ITEM_ERROR);

//Deleting
export const deleteTreeItemAction = createAction(DELETE_TREE_ITEM);
export const deleteTreeItemSuccessAction = createAction(
  DELETE_TREE_ITEM_SUCCESS,
);
export const deleteTreeItemErrorAction = createAction(DELETE_TREE_ITEM_ERROR);
