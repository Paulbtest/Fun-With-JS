let array = [1, 1, 1, 6, 16, 14, 9];

let summationCounter = 0;
let sumOfNumbers = 0;

for (let i = 0; i < array.length; i++) {
    if (sumOfNumbers < 10) {
    sumOfNumbers += array[i];
    summationCounter++;
    } else {
        break;
    };
}

console.log(summationCounter);

/* Дан массив с числами.Узнайте сколько элементов с начала массива надо сложить, чтобы в
сумме получилось больше 10 - ти. */