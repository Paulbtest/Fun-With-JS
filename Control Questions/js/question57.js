let lang = 'en';

let arrWeek = [];

//решение через if
/* if (lang === 'ru') {
    arrWeek.push('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else {
    arrWeek.push('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
}; */



//решение через switch-case
/* switch (lang) {
    case 'ru': 
        arrWeek.push('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case 'en':
        arrWeek.push('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        break;
}; */



//решение через многомерный массив
arrWeek = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

console.log(arrWeek[lang]);

/* Переменная lang может принимать 2 значения: 'ru' 'en'.Если она имеет значение 'ru', то в
переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' –
то на английском.Решите задачу через 2 if, через switch-case и через многомерный массив
без ифов и switch. */