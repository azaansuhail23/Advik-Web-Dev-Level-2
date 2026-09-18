/* Definition : A callback is a function that we give to another function so that it can be executed later. */

//?Callback function 
function greet(name,callback){
    console.log("Hello "+name);
    callback();
}

//normal function
function goodbye(){
    console.log("Goodbye!");
}

greet("Azaan",goodbye);


