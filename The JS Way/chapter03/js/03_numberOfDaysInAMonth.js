// switch solution

let monthInput = Number(prompt("Please enter a month number (between 1 and 12)"));

switch (monthInput) {
    case 1:
        console.log(`You've entered ${monthInput}. There are 31 days in January.`);
        break;
    case 2:
        console.log(`You've entered ${monthInput}. There are 28 days in February.`);
        break;
    case 3: 
        console.log(`You've entered ${monthInput}. There are 31 days in March.`);
        break;
    case 4:
        console.log(`You've entered ${monthInput}. There are 30 days in April.`);
        break;
    case 5:
        console.log(`You've entered ${monthInput}. There are 31 days in May.`);
        break;
    case 6:
        console.log(`You've entered ${monthInput}. There are 30 days in June.`);
        break;
    case 7: 
        console.log(`You've entered ${monthInput}. There are 31 days in July.`);
        break;
    case 8: 
        console.log(`You've entered ${monthInput}. There are 31 days in August.`);
        break;
    case 9:
        console.log(`You've entered ${monthInput}. There are 30 days in September.`);
        break;
    case 10:
        console.log(`You've entered ${monthInput}. There are 31 days in October.`);
        break;
    case 11:
        console.log(`You've entered ${monthInput}. There are 30 days in November.`);
        break;
    case 12:
        console.log(`You've entered ${monthInput}. There are 31 days in December.`);
        break;
    default: 
        console.log(`Incorrect input. You've entered ${monthInput}.`)
}; 

/* Write a program that accepts a month number(between 1 and 12), then shows the number of
days of that month.Leap years are excluded.Incorrect inputs must be taken into account.
 */