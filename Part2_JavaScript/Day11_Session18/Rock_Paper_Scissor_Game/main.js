const game = [
    `
    ROCK
    
    _______
    ---'   ____)
          (_____)
          (_____)
          (____)
    ---.___(___)
    `,

    `
    PAPER
    
     _______
    ---'    ____)____
               ______)
              _______)
             _______)
    ---.____________)
    `,

    `
    SCISSORS
    
     _______
    ---'   ____)____
              ______)
           __________)
          (____)
    ---.___(____)
    `
    ];

// Display all choices
console.log(game[0]);
console.log(game[1]);
console.log(game[2]);

console.log(typeof(game[0]));
console.log(typeof(game[1]));
console.log(typeof(game[2]));


// Take user input
let user = Number(
    prompt(
        "What do you choose?\n" +
        "0 = Rock\n" +
        "1 = Paper\n" +
        "2 = Scissors\n" +
        "Enter: "
    )
);

if (user>2 || user<0){
    console.log("Invalid Choice");
}
else{
    //? Gerating random computer choice
    const computer=Math.floor(Math.round()*3);

    //Diplaying the choices
    console.log(game[user]);
    console.log(game[computer]);

    if (user==computer){
        console.log("🤝 Draw!");
    }
    else if (user==0 && computer==1){
        console.log("You Lose!");
    }
    else if (user==0 && computer==2){
        console.log("🎉 You Win!");
    }
    else if (user==1 && computer==0){
        console.log("🎉 You Win!");
    }
    else if (user==1 && computer==2){
        console.log("You Lose!");
    }
    else if (user === 2 && computer === 0) {
        console.log("You Lose!");
    }
    else{
        console.log("🎉 You Win!");
    }
}