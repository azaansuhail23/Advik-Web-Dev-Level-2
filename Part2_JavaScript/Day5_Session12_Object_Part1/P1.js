//Flat method : 

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr.flat(1));


const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat(Infinity))