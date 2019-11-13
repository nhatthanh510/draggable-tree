import { all, call, put, take } from 'redux-saga/effects';

import { treeService } from 'services';

import {
  loadTreeDataAction,
  loadTreeDataSuccessAction,
  loadTreeDataErrorAction,
} from 'store/tree/action';

function* loadTreeDataSaga() {
  while (1) {
    const { type } = loadTreeDataAction();
    const action = yield take(type);
    try {
      // @ts-ignore
      const response = yield call(treeService.loadTreeData, action.payload);

      yield put(loadTreeDataSuccessAction(response));
    } catch (err) {
      yield put(loadTreeDataErrorAction(err));
    }
  }
}
export default function* rootSaga() {
  yield all([loadTreeDataSaga()]);
}
