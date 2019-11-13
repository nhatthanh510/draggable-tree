import { all } from 'redux-saga/effects';

import treeSaga from './tree/saga';

export default function* rootSaga() {
  yield all([treeSaga()]);
}
