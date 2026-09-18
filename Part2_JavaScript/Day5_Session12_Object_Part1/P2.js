let arr1 = [1, 2, 3, 4];
let arr2 = [7, 8];
let arr3=[5,6,7,9,10]

console.log(...arr1, ...arr2);
console.log(...arr1, ...arr2, ...arr3);

console.log(...arr1, 10,12,99, ...arr2, 17,19, ...arr3)

// * Spreading means it is used to expand the array and spreading does not change the original array
console.log(arr1);