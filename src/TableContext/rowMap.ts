import RowMap from "../types/RowMap";

const defaultRowMap:RowMap = (arr, callback) => {
  const resultArray = [];
  for (let index = 0; index < arr.length; index++) {
    resultArray.push(callback(arr[index], index, arr));
  }
  return resultArray;
}

export default defaultRowMap
