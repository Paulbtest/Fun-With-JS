let numberArr = [];
let modifiedNumber;

for (let i = 1; i < 5; i++) {
    
    modifiedNumber = '';

    for (let j = 1; j <= i; j++) {
        modifiedNumber += i;
    };

    numberArr.push(modifiedNumber);
};

console.log(numberArr);

/* Заполните массив с помощью цикла следующим образом: в первый элемент запишите '1', во
второй '22', в третий '333' и так далее. */