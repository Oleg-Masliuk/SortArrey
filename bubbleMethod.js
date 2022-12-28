const arr = [2, 44, 8, 12, 23, 11, 24, 14];

const sortGrowth = (arr) => {
  let counter;
  while (counter !== 0) {
    counter = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
      if (arr[i] > arr[i + 1]) {
        let temporaryValue = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temporaryValue;
        counter++;
      }
    }
  }
};
sortGrowth(arr);
console.log(arr);
