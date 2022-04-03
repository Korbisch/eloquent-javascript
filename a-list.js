function arrayToList(arr) {
  let list;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = prepend(arr[i], list);
  }
  return list;
}

function listToArray(list) {
  let arr = [];
  while(list) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list, number) {
  while (list && number > 0) {
    number--;
    list = list.rest;
  }
  return list ? list.value : undefined;
}

function recursiveNth(list, number) {
  if (!list) return undefined;
  if (number === 0) return list.value;
  return recursiveNth(list.rest, number - 1);
}


let arr = [1, 2, 3];
let list = arrayToList(arr);
console.log(list);
console.log(listToArray(list));
console.log(nth(list, 0));
console.log(recursiveNth(list, 2));
