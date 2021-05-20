let numbersArray = [3, 5, 9];

function showNumbers(arr) {
    console.log(arr.shift());

    if (arr.length != 0) {
        showNumbers(arr);
    }
}

showNumbers(numbersArray);

/* Дан массив с числами.Выведите последовательно его элементы используя рекурсию и не
используя цикл. */