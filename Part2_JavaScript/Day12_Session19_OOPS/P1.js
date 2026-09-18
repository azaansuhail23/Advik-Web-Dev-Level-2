class User{
    // contructor & methods --> Both are functions
    //! contructor is a function that runs itself when object is initialized

    constructor(name){
        this.name=name;
    }


    //*Method--> It is also a function which is defined inside the class
    sayHi(){
        console.log(this.name)
    }
}


user=new User("Advik")

user.sayHi();

function Advik(){
    console.log("Advik");
}

Advik(); //*Invoking / calling / using a function 