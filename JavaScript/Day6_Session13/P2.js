//~ Objects Methods
const obj = {
    name: 'Advik',
    age: 11,
    city: 'London'
}

let entries = Object.entries(obj); //it returns key and value pair of the object
console.log("Object.entries ="+entries);

let keys = Object.keys(obj); //it will return the array of keys of a particular object
console.log("Object.keys ="+ keys);

let values = Object.values(obj); //it will return the array of value of keys of a particular object
console.log("Object.values ="+values);