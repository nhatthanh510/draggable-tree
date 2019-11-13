import React from 'react';
import { Button, Row, Col, Input, Spin } from 'antd';
import Tree from 'containers/DraggableTree/Tree';
import { useTreeWrapperData } from '../../common/hooks/treeWrapper';

function TreeWrapper(props) {
  const {
    treeData,
    treeDataLoading,
    currentTreeData,
    handleExport,
  } = useTreeWrapperData();
  return (
    <Row gutter={32} style={{ margin: '50px' }}>
      <Col span={16}>
        <Spin spinning={treeDataLoading}>
          <Tree treeInfo={currentTreeData} />
        </Spin>
      </Col>
      <Col span={8} style={{ position: 'fixed', top: '60px', right: 0 }}>
        <Button icon="upload" onClick={handleExport} className="mb-5">
          Export to JSON
        </Button>
        <Input.TextArea
          autoSize={{
            minRows: 20,
            maxRows: 20,
          }}
          value={
            treeData && treeData.length && JSON.stringify(treeData, null, 2)
          }
        ></Input.TextArea>
      </Col>
    </Row>
  );
}

export default TreeWrapper;
