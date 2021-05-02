let userInputDay = prompt("Please enter a day name. Example: Monday.").toLowerCase();

// Switch solution

switch (userInputDay) {
    case 'monday':
        console.log("The following day is Tuesday.");
        break;
    case 'tuesday':
        console.log("The following day is Wednesday.");
        break;
    case 'wednesday':
        console.log("The following day is Thursday.");
        break;
    case 'thursday':
        console.log("The following day is Friday");
        break;
    case 'friday':
        console.log("The following day is Saturday");
        break;
    case 'saturday': 
        console.log("The following day is Sunday");
        break;
    case 'sunday':
        console.log("The following day is Monday");
        break;
    default:
        console.log("Incorrect input. Please enter a day name. Example: Monday.");
        break;
}

// If solution

/* if (userInputDay === 'monday') {
    console.log("The following day is Tuesday.");
} else if (userInputDay === 'tuesday') {
    console.log("The following day is Wednesday.");
} else if (userInputDay === 'wednesday') {
    console.log("The following day is Thursday.");
} else if (userInputDay === 'thursday') {
    console.log("The following day is Friday");
} else if (userInputDay === 'friday') {
    console.log("The following day is Saturday");
} else if (userInputDay === 'saturday') {
    console.log("The following day is Sunday");
} else if (userInputDay === 'sunday') {
    console.log("The following day is Monday");
} else {
    console.log("Incorrect input. Please enter a day name. Example: Monday.")
}; */



/* Write a program that accepts a day name from the user, then shows the name of the following
day. Incorrect inputs must be taken into account. */