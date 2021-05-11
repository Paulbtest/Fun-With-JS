const values = [3, 11, 7, 2, 9, 10];


function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

console.log(getMaxOfArray(values));


/* let maxNumber = values[0];

for (let i = 1; i < values.length; i++) {
    if (values[i] > maxNumber) {
        maxNumber = values[i];
    }
};

console.log(maxNumber); */


/* Write a program that creates the following array, then calculates and shows the array’s maximum
value.
const values = [3, 11, 7, 2, 9, 10];
 */