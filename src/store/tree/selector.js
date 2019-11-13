import { createSelector } from 'reselect';
import { flattenTree } from 'common/helpers';

export const getTreeData = state => state.tree.data;

export const getTreeDataLoading = state =>
  state.tree.loadingStatus.treeDataLoading;

export const getFlattenTreeData = createSelector(
  state => state.tree.data,
  data => flattenTree(data),
);
