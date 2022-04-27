/*
  Указать временную сложность приведенных алгоритмов
*/

// 1
const numbers = new Array(100);

for (let i = 0; i < numbers.length; i++) {
  console.log(i);
}

// 2
const arr = [1, 2, 3, 4];
arr.push(5);
arr.push(6);
arr.push(7);

// 3
const search = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;

  while(low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess  = arr[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};
