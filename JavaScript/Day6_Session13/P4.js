//* this keyword in javascript


const info = {
    name: "Azaan Suhail",
    age: 23,
    city:"Bareilly",
    student:"Advik",
    student_age:11,

    address: function (){
        console.log(`My name is ${this.name} and I live in ${this.city}. I am ${this.age} years old.`);
    },

    student_info:function(){
        console.log(`${this.name} is a web dev mentor and whose student is ${this.student} and whose age is ${this.student_age} old`)
    }
};

//^ this keyword refers to the object(info) that is executing the function (this.name);


info.address();
info.student_info();

const info2 = {
    name: "Azaan Suhail",
    age: 23,
    city: "Bareilly",
    student: "Advik",
    student_age: 11,

    address: () => { 
        console.log(`My name is ${this.name} and I live in ${this.city}. I am ${this.age} years old.`);
     },

    student_info: function () {
        console.log(`${this.name} is a web dev mentor and whose student is ${this.student} and whose age is ${this.student_age} old`)
    }
};