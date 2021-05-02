let hours = Number(prompt("Please enter hours (in 24h format):"));
let minutes = Number(prompt("Please enter minutes:"));
let seconds = Number(prompt("Plese enter seconds:"));

console.log(`You've entered ${hours}h${minutes}m${seconds}s.`);

if (isNaN(seconds) || isNaN(minutes) || isNaN(hours)) {
    console.log("Invalid input. Please enter a number.");
} else if (seconds < 0 || minutes < 0 || hours < 0) {
    console.log("Invalid input. Please make sure that all numbers are greater than zero");
} else {

    seconds++; //Increase seconds value

    switch (true) {
        case (seconds > 60): //Check if seconds input is greater than 60
            seconds = 0;
            minutes++;
            console.log("There are only 60 seconds in a minute! Setting the seconds value to 0 and increasing minutes");
            break;

        case (seconds > 59):
            seconds = 0;
            minutes++;
            break;
    };

    switch (true) {
        case (minutes > 60): //Check if minutes input is greater than 60
            minutes = 0;
            seconds = 0;
            hours++;
            console.log("There are only 60 seconds in a minute! Setting the minutes and seconds value to 0 and increasing hours");
            break;

        case (minutes > 59):
            minutes = 0;
            hours++;
            break;
    };

    switch (true) {
        case (hours >= 25):  //Check if hours input is greater than 24
            hours = 0;
            minutes = 0;
            seconds = 0;
            console.log("There are only 24 hours in a day! Resetting all values to zero");
            break;

        case (hours >= 24):
            hours = 0;
            break;
    };
    console.log(`In one second it will be ${hours}h${minutes}m${seconds}s.`)
};


/* Following second
Write a program that asks for a time under the form of three information(hours, minutes, seconds).
The program calculates and shows the time one second after.Incorrect inputs must
be taken into account.

This is not as simple as it seems… Look at the following results to see for yourself:
• 14h17m59s ⇒ 14h18m0s
• 6h59m59s ⇒ 7h0m0s
• 23h59m59s ⇒ 0h0m0s(midnight) */