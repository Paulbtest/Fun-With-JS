let min = function(firstNumber, secondNumber) {
    
    let minimumNumber;
    if (firstNumber > secondNumber) {
        minimumNumber = secondNumber;
    } else {
        minimumNumber = firstNumber;
    }
    return minimumNumber;
};

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1 */
console.log(min(1, 99)); // Must show 1 */

/* Let’s pretend the JavaScript Math.min() function doesn’t exist.Complete the following program
so that the min() function returns the minimum of its two received numbers.

    // TODO: write the min() function
    console.log(min(4.5, 5)); // Must show 4.5

console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1 */