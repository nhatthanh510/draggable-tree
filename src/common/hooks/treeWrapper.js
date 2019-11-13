import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTreeData, getTreeDataLoading } from 'store/tree/selector';
import { loadTreeDataAction } from 'store/tree/action';

const useTreeWrapperData = () => {
  const dispatch = useDispatch();
  const currentTreeData = useSelector(getTreeData);
  const treeDataLoading = useSelector(getTreeDataLoading);
  const [treeData, setTreeData] = useState(currentTreeData);
  useEffect(() => {
    dispatch(loadTreeDataAction());
  }, [dispatch]);

  const handleExport = () => {
    setTreeData(currentTreeData);
  };

  return { treeDataLoading, currentTreeData, treeData, handleExport };
};

export { useTreeWrapperData };
