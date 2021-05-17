const numbers = [13, 131, 05, 11, 16, 23, 16];
let findNumber = false;


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 5) {
        findNumber = true;
    }
};

if (findNumber) {
    console.log("Да")
} else {
    console.log("Нет")
};

/* Дан массив с числами.Проверьте, что в этом массиве есть число 5. Если есть - выведите
'да', а если нет - выведите 'нет'.
 */