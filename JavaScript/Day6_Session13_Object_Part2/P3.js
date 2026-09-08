//  Nested Objects ==> Object created inside the other object;

const info={
    Name:"Azaan Suhail",
    age:23,
    address:{
        state:"UP",
        city:"Bareilly",
        House_Number: 483
    },

    courses:["AI","ML","Web Dev"]
};

let { Name, age, address, courses } = info;

console.log(Name);
console.log(age);
console.log(address);
console.log(courses);


let {Name:user_name}=info;
console.log(user_name);