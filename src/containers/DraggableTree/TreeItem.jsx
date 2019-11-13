import React, { useRef } from 'react';
import { Button, Icon, Input, Row, Col } from 'antd';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from 'common/constants';
import {
  moveTreeItemAction,
  deleteTreeItemAction,
  updateTreeItemAction,
  addTreeItemAction,
} from 'store/tree/action';
import { useDispatch, useSelector } from 'react-redux';
import { getFlattenTreeData } from 'store/tree/selector';
import Tree from './Tree';
import styles from './style.module.less';

function TreeItem(props) {
  const dispatch = useDispatch();
  const flatternTreeData = useSelector(getFlattenTreeData);
  const { treeItem, treeId, editedItem, setEditedItem, parentId } = props;
  const ref = useRef(null);
  function moveItem(dragId, hoverId) {
    dispatch(
      moveTreeItemAction({
        dragId,
        hoverId,
        moveToParent: false,
        moveToTop: false,
      }),
    );
  }
  function moveToTop(dragId, hoverId) {
    dispatch(
      moveTreeItemAction({
        dragId,
        hoverId,
        moveToParent: false,
        moveToTop: true,
      }),
    );
  }
  function _cancel() {
    setEditedItem(null);
  }

  function _save() {
    dispatch(
      updateTreeItemAction({ id: editedItem.id, text: editedItem.text }),
    );
    setEditedItem(null);
  }

  function _deleteItem(id) {
    return function() {
      dispatch(deleteTreeItemAction({ id }));
    };
  }

  function _editItem(id, text) {
    return function() {
      setEditedItem({
        id,
        text,
      });
    };
  }

  function _addItem(id) {
    return function() {
      const text = prompt('Please enter the node name');
      dispatch(addTreeItemAction({ id, text }));
    };
  }

  function _handleChange(id) {
    return function(e) {
      setEditedItem({
        id,
        text: e.target.value,
      });
    };
  }
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.TREE_ITEM,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    // @ts-ignore
    begin: monitor => {
      return {
        treeId,
        treeItem,
        parentId,
      };
    },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TREE_ITEM,
    drop: (item, monitor) => {
      if (!monitor.isOver({ shallow: true })) return;
      const { treeId: dragId } = monitor.getItem();
      const hoverId = treeId;
      const hoverIndex = flatternTreeData.findIndex(
        item => item.id === hoverId,
      );
      const hoverItem = flatternTreeData[hoverIndex];
      if (hoverItem.parentList[dragId]) return;
      if (!ref.current) {
        return;
      }

      if (dragId === hoverId) {
        return;
      }
      moveItem(dragId, hoverId);
    },
  });
  const [, topDrop] = useDrop({
    accept: ItemTypes.TREE_ITEM,
    drop: (item, monitor) => {
      if (!monitor.isOver({ shallow: true })) return;
      const { treeId: dragId } = monitor.getItem();
      const hoverId = treeId;
      const hoverIndex = flatternTreeData.findIndex(
        item => item.id === hoverId,
      );
      const hoverItem = flatternTreeData[hoverIndex];
      if (hoverItem.parentList[dragId]) return;
      if (!ref.current) {
        return;
      }

      if (dragId === hoverId) {
        return;
      }
      moveToTop(dragId, hoverId);
    },
  });

  const opacity = isDragging ? 0 : 1;
  const { children, text, id } = treeItem;
  drag(drop(ref));

  function _renderEditingState(id) {
    return (
      <Row className={styles.treeItem}>
        <Col span={16}>
          <Input value={editedItem.text} onChange={_handleChange(id)}></Input>
        </Col>
        <Col span={8}>
          <div className={styles.buttonGroup}>
            <Button type="primary" onClick={_save} className="mr-2">
              Save
            </Button>
            <Button onClick={_cancel} className="mr-2">
              Cancel
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
  return (
    <div>
      <div
        ref={topDrop}
        style={{ backgroundColor: '#f8f9fa', height: '15px' }}
      ></div>
      <div ref={ref} className="treeItemDrag" style={{ opacity }}>
        {editedItem && editedItem.id === treeId ? (
          _renderEditingState(treeId)
        ) : (
          <Row className={styles.treeItem}>
            <Col span={16}>{text}</Col>
            <Col span={8}>
              <div className={styles.buttonGroup}>
                <Button type="primary" onClick={_addItem(id)} className="mr-2">
                  <Icon type="plus" />
                </Button>
                <Button onClick={_editItem(id, text)} className="mr-2">
                  <Icon type="edit" />
                </Button>
                <Button type="danger" onClick={_deleteItem(id)}>
                  <Icon type="delete" />
                </Button>
              </div>
            </Col>
          </Row>
        )}
        <Tree parentId={treeId} treeInfo={children} />
      </div>
    </div>
  );
}

export default TreeItem;
