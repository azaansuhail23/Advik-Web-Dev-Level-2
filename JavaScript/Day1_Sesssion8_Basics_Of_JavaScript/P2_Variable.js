// * Variable are like containers which stores values & values can be your name, your age, your list of hobbies or anything
//~ Memory containers

/* Rules for Naming Variables (Identifiers) in JavaScript:

  1. Variables can contain letters, digits, underscores (_), and dollar signs ($).
  2. Variables must begin with a letter, an underscore (_), or a dollar sign ($). //& They cannot start with a digit.
  3. Variables are case-sensitive ("y" and "Y" are different variables).
  4. Reserved keywords (like let, const, var, function, etc.) cannot be used as variable names.
*/

//^ In JavaScript, we can declare variables using three keywords:  let, var,and const.

let message; 
console.log(message);

message="Hello Universe!"
console.log(message);

message="Azaan In India"
console.log(message);



// const message1;
// console.log(message1);

//* const message1; it will show the error because const cannot be uninitialized 
const message2="Advik_London";
console.log(message2);

// message2 = "Azaan_India" //~ cannot be changed after once initialization is completed.
console.log(message2);

var message3;
var message3;
console.log(message3)

/*
var ->   uninitialized✅ reassign✅  redeclared✅ 
let ->   uninitialized✅ reassign✅ redeclare❌
const -> uninitialized❌ reassign❌  redeclare❌  
*/