function range(start, stop, step = 1) {
  if (start === stop) return [start];
  if (start > stop && step > 0) return [];
  if (start < stop && step < 0) return [];
  return [start, ...range(start + step, stop, step)];
}

function sum(arr) {
  return arr.reduce((a,b) => a + b);
}

console.log(sum(range(1,10)));
console.log(range(1,10,2));
console.log(range(5,5));
console.log(range(5,2,-2));
console.log(range(5,2,2));
