/*
Trick : NNSSBBU  --> primitive data type (basic data type)

1. Number
2. Null
3. String
4. Symbol
5. BigInt
6. Boolean
7. Undefined
*/

//1 . number
let num1=10;
let num2=10.32;
console.log(typeof num1);
console.log(typeof num2);

// 2. string
let str = "Hello World";
console.log(str);
console.log(typeof str);

// 3. boolean
let bool = true;
console.log(bool);
console.log(typeof bool);

//4. undefined: A variable that has been declared but not assigned a value

let und;
console.log(und);
console.log(typeof und);

// 5. null : Represents an intentional absence of any value
let nul=null;
console.log(nul);
console.log(typeof nul);

//* Note : type of null is object in javascript -> interview problem

// 6. symbol   
let sym = Symbol('my symbol');
console.log(sym);
console.log(typeof sym);

// 7. bigint 
let bigInt = 1000000000000000000000000000000000000000000000000000n;
console.log(bigInt);
console.log(typeof bigInt);

//8. object + array + function => non-primitive data types

