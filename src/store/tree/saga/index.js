import { all } from 'redux-saga/effects';

import treeSaga from './tree-saga';
import treeItemSaga from './tree-item-saga';

export default function* rootSaga() {
  yield all([treeSaga(), treeItemSaga()]);
}
