// BMI = weight/height*height

/* let input = require('readline-sync');

let weight = input.question("Enter the weight ");  //Wt=Kg
let height = input.question("Enter the height ");  //ht=cm


let bmi=weight/(height*height)


if (bmi < 18.5) {
    console.log("Underweight");
}
else if (bmi < 25) {
    console.log("Normal");
}
else if (bmi < 30) {
    console.log("Overweight");
}
else {
    console.log("Obesity");
}
 */

//* Function definition
function BMI_Calculator(ht,wt){
    let weight = wt
    let height = ht

    let bmi = weight / (height * height)


    if (bmi < 18.5) {
        console.log("Underweight");
    }
    else if (bmi < 25) {
        console.log("Normal");
    }
    else if (bmi < 30) {
        console.log("Overweight");
    }
    else {
        console.log("Obesity");
    }
}


//Calling the function
BMI_Calculator(140,31);