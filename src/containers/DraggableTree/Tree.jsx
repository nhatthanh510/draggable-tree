import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { ItemTypes } from 'common/constants';
import TreeItem from './TreeItem';
import styles from './style.module.less';
import { moveTreeItemAction } from 'store/tree/action';

function Tree(props) {
  const [editedItem, setEditedItem] = useState(null);
  const dispatch = useDispatch();
  const { treeInfo, parentId } = props;
  function moveItem(dragId, hoverId) {
    dispatch(
      moveTreeItemAction({
        dragId,
        hoverId,
        moveToParent: true,
        moveToTop: false,
      }),
    );
  }
  function _moveTreeItem(item, monitor) {
    if (!monitor.isOver({ shallow: true })) return;
    const { treeId: dragId, parentId: itemParent } = monitor.getItem();
    if (itemParent) {
      moveItem(dragId, itemParent);
    }
  }

  const [, drop] = useDrop({
    accept: ItemTypes.TREE_ITEM,
    drop: _moveTreeItem,
  });

  function _renderTreeItem(data) {
    if (!data || data.length === 0) return null;
    return data.map((item, index) => {
      return (
        <div key={item.id} className={styles.tree}>
          <TreeItem
            parentId={parentId}
            treeItem={item}
            treeId={item.id}
            editedItem={editedItem}
            setEditedItem={setEditedItem}
          />
        </div>
      );
    });
  }

  return <div ref={drop}>{_renderTreeItem(treeInfo)}</div>;
}

export default Tree;
