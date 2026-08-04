let arr1=["Azaan","Advik","Tejas"]   //~ String data type (Similar)
console.log(arr1);


let arr2=["Azaan",24,"Advik",12.5,true];  // ~ String,Number, String, Number, Boolean --> Different
console.log(arr2);


let arr3=[];
arr3.push("Python");
console.log(arr3);

arr3.push(false);
console.log(arr3);

//& Push in array is a method which adds element at the end of the array.

//? Concat --> Concatenate Means -> joining / combining/adding

arr4 = [4, 5, 6];
arr5 = [7, 8, 9];
arr6 = [10, 12];
arr7 = [1, 2, 3];

let concatenate=arr4.concat(arr5,arr6,arr7);
console.log(concatenate);


let arr8=[1,2,3,4,5];
arr8.pop();  //^ Pop is a array method which removes the element form the end.
console.log(arr8);

let arr9=[1,2,3,4,5];
arr9.shift();
console.log(arr9);

//? Pop removes element from the end while shift removes the element from the start.
let arr10=[1,2,3,4,5];
//         0 1 2 3 4

// arr10.slice(start,end)
let new_arr=arr10.slice(1,4);
console.log(arr10);
console.log(new_arr);
