let arr = [2, 44, 8, 12, 23, 11, 24, 14];

const sortChoise = (arr) => {
  for (let j = 0; j < arr.length - 1; j = j + 1) {
    let min = j;
    for (let i = j + 1; i < arr.length; i = i + 1) {
      if (arr[min] > arr[i]) {
        min = i;
      }
    }
    let temporaryValue = arr[j];
    arr[j] = arr[min];
    arr[min] = temporaryValue;
  }
};
sortChoise(arr);
console.log(arr);
