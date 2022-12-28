let arr = [11, 2, 33, 24, 5, 23, 56, 12, 67, 99, 34, 46, 7, 3];

const SortArr = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    let left = [];
    let right = [];
    let outputArr = [];
    let pivot = arr.pop();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return outputArr.concat(SortArr(left), pivot, SortArr(right));
  }
};

console.log(SortArr(arr));

