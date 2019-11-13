import { all, put, take, select } from 'redux-saga/effects';
import produce from 'immer';
import { getTreeData } from 'store/tree/selector';
import {
  moveTreeItemAction,
  moveTreeItemSuccessAction,
  moveTreeItemErrorAction,
  addTreeItemAction,
  addTreeItemSuccessAction,
  addTreeItemErrorAction,
  updateTreeItemAction,
  updateTreeItemSuccessAction,
  updateTreeItemErrorAction,
  deleteTreeItemAction,
  deleteTreeItemSuccessAction,
  deleteTreeItemErrorAction,
} from 'store/tree/action';

function* moveTreeItemSaga() {
  while (1) {
    const { type } = moveTreeItemAction();
    const action = yield take(type);
    try {
      const { dragId, hoverId, moveToParent, moveToTop } = action.payload;
      const currentTreeData = yield select(getTreeData);
      const nextState = produce(currentTreeData, draftData => {
        if (moveToParent) {
          let child = findItem(dragId, draftData);
          removeItem(dragId, draftData);
          let result = findParent(hoverId, draftData);
          if (result === true) {
            for (let i = 0; i < draftData.length; i += 1) {
              if (draftData[i].id === hoverId) {
                draftData.splice(i + 1, 0, child);
                break;
              }
            }
          } else if (result) {
            for (let i = 0; i < result.children.length; i += 1) {
              if (result.children[i].id === hoverId) {
                result.children.splice(i + 1, 0, child);
                break;
              }
            }
          }
        } else {
          let child = findItem(dragId, draftData);
          removeItem(dragId, draftData);
          if (!moveToTop) {
            let parent = findItem(hoverId, draftData);
            parent.children.unshift(child);
          } else {
            let parent = findParent(hoverId, draftData);
            if (parent === true) {
              for (let i = 0; i < draftData.length; i += 1) {
                if (draftData[i].id === hoverId) {
                  draftData.splice(i, 0, child);
                  break;
                }
              }
            } else if (parent) {
              for (let i = 0; i < parent.children.length; i += 1) {
                if (parent.children[i].id === hoverId) {
                  parent.children.splice(i, 0, child);
                  break;
                }
              }
            }
          }
        }
      });

      yield put(moveTreeItemSuccessAction(nextState));
    } catch (err) {
      yield put(moveTreeItemErrorAction(err));
    }
  }
}

function* addTreeItemSaga() {
  while (1) {
    const { type } = addTreeItemAction();
    const action = yield take(type);
    try {
      const { id, text } = action.payload;
      const currentTreeData = yield select(getTreeData);
      const nextState = produce(currentTreeData, draftData => {
        const addingItem = findItem(id, draftData);
        addingItem.children.push({
          id: new Date().valueOf() + Math.floor(Math.random() * 1000),
          text,
          children: [],
        });
      });

      yield put(addTreeItemSuccessAction(nextState));
    } catch (err) {
      yield put(addTreeItemErrorAction(err));
    }
  }
}

function* updateTreeItemSaga() {
  while (1) {
    const { type } = updateTreeItemAction();
    const action = yield take(type);
    try {
      const { id, text } = action.payload;
      const currentTreeData = yield select(getTreeData);

      const nextState = produce(currentTreeData, draftData => {
        const updateItem = findItem(id, draftData);
        updateItem.text = text;
      });

      yield put(updateTreeItemSuccessAction(nextState));
    } catch (err) {
      yield put(updateTreeItemErrorAction(err));
    }
  }
}

function* deleteTreeItemSaga() {
  while (1) {
    const { type } = deleteTreeItemAction();
    const action = yield take(type);
    try {
      const { id } = action.payload;
      const currentTreeData = yield select(getTreeData);
      const nextState = produce(currentTreeData, draftData => {
        removeItem(id, draftData);
      });

      yield put(deleteTreeItemSuccessAction(nextState));
    } catch (err) {
      yield put(deleteTreeItemErrorAction(err));
    }
  }
}

function findItem(id, items) {
  for (const node of items) {
    if (node.id === id) return node;
    if (node.children && node.children.length) {
      const result = findItem(id, node.children);

      if (result) {
        return result;
      }
    }
  }

  return false;
}

function findParent(id, items) {
  for (const node of items) {
    if (node.id === id) return true;
    if (node.children && node.children.length) {
      const result = findParent(id, node.children);

      if (result === true) {
        return node;
      } else if (result) {
        return result;
      }
    }
  }

  return false;
}

function removeItem(id, items) {
  for (const node of items) {
    if (node.id === id) {
      items.splice(items.indexOf(node), 1);
      return;
    }

    if (node.children && node.children.length) {
      removeItem(id, node.children);
    }
  }
}

export default function* rootSaga() {
  yield all([
    moveTreeItemSaga(),
    addTreeItemSaga(),
    updateTreeItemSaga(),
    deleteTreeItemSaga(),
  ]);
}
