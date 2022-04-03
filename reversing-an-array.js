// should produce a new array
function reverseArray(arr) {
  let newArray = [];
  for (val of arr) {
    newArray.unshift(val);
  }
  return newArray;
}

// should reverse array in place
function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    // swap the values
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

const N = 100000;
console.time('reverseArray');
reverseArray([...Array(N).keys()]);
console.timeEnd('reverseArray');

console.time('reverseArrayInPlace');
reverseArrayInPlace([...Array(N).keys()]);
console.timeEnd('reverseArrayInPlace');
