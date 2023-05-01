"use strict";

// Declare an arrow function named randomDamage that has no parameters and returns a random integer between 1 and 10.

let randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1
};

// Arrow function named chooseOption with parameters "opt1" and "opt2" and:
// Declares and initializes a variable named randNum to either 0 or 1 randomly
// Testing requires rounding from 0.5 with opt1 = 0; opt2 = 1 with ternary operator

let chooseOption = (opt1, opt2) => {
    let randNum = Math.random();
    return randNum < 0.5 ? opt1 : opt2;
};

// Function named attackPlayer with parameter "health" and returns "health - randomDamage" function result

let attackPlayer = (health) => {
    return health - randomDamage();
}

// Function named logHealth with parameters "player" and "health" and console.log the following message: 'player' health: 'health'

let logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
    return;
};

// Function named logDeath with parameters "winner" and "loser" and console.log the following message: 'winner' defeated 'loser'

let logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
    return;
};

// Function named isDead with parameter "health" with Boolean result based on the condition: "health <= 0"

let isDead = (health) => {
    return health <= 0 ? true : false;
};

// Function named "fight" with parameters: player1 (name), player2 (name), player1Health, player2Health
// Within the "fight" function, write a while loop that loops while true:
//      * Declare and initialize variable "attacker" equal to the chooseOption function with player1 and player2 as options
//      * If "attacker" = player1
//          * player2Health = attackPlayer (player2Health) argument
//          * Calls logHealth function with arguments (player2, player2Health)
//          * If player2Health result of isDead = true
//              * Call logDeath (player1, player2)
//      * Else "attacker" = player2
//          * player1Health = attackPlayer (player1Health) argument
//          * Calls logHealth function with arguments (player1, player1Health)
//          * If player1Health result of isDead = true
//              * Call logDeath (player2, player1)

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health)
            if (isDead(player2Health) === true) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health)
            if (isDead(player1Health) === true) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

fight("Travis Kelce", "Mark Andrews", 100, 100);