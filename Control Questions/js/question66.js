let numberArray = [0, 1, 12, 14, 6, 9, 7, 11, 18, 99, 4, 3, 10]; 
let numberArrayLower = [];

for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0 && numberArray[i] < 10) {
        numberArrayLower.push(numberArray[i]);
    };
};

console.log(numberArrayLower);

/* Дан массив с числами.Запишите в новый массив только те числа, которые больше нуля и
меньше 10 - ти */