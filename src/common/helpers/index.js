export const flattenTree = (arr, parentList = []) => {
  if (!arr) return;
  let result = [];
  arr.forEach(item => {
    const updatedItem = { ...item };
    updatedItem.parentList = {};
    for (let i = 0; i < parentList.length; i += 1) {
      updatedItem.parentList[parentList[i]] = true;
    }
    result.push(updatedItem);
    if (Array.isArray(item.children)) {
      let cloneParentList = parentList.slice(0);
      cloneParentList.push(item.id);
      result = result.concat(flattenTree(item.children, cloneParentList));
    }
  });
  return result;
};
