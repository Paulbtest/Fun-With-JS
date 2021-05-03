// for solution

let turnLimit = Number(prompt("Please enter the desired number of carousel turns."));

if (isNaN(turnLimit)) {
    console.log("Invalid input. Please try again.")
} else {

    for (let i = 1; i <= turnLimit; i++) {
        if (i === 1) {
            console.log(`The carousel has turned ${i} time!`);
        } else {
            console.log(`The carousel has turned ${i} times!`);
        };
    };
};


// while solution

/* let carouselTurn = 1;
let turnLimit = Number(prompt("Please enter the desired number of carousel turns."));

if (isNaN(turnLimit)) {
    console.log("Invalid input. Please try again.")
} else {
    while (carouselTurn <= turnLimit) {
        if (carouselTurn === 1) { 
            console.log(`The carousel has turned ${carouselTurn} time!`);
        } else {
        console.log(`The carousel has turned ${carouselTurn} times!`);
        };
        carouselTurn++;
    };
}; */

/* Write a program that launches a carousel for 10 turns, showing the turn number each time.
When it’s done, improve it so that the number of turns is given by the user. */
