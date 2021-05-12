let userHours = Number(prompt("Введите количество часов (по 24-часовой системе): "));
let userMinutes = Number(prompt("Введите количество минут: "));

let secondsSinceMidnight = (userHours * 3600) + (userMinutes * 60);
let minutesSinceMidnight = (userHours * 60) + userMinutes;
let minutesTillMidnight = 1440 - (userHours * 60 + userMinutes);

console.log(`С полуночи прошло ${secondsSinceMidnight} секунд.`);
console.log(`С полуночи прошло ${minutesSinceMidnight} минут.`);
console.log(`До полуночи осталось ${minutesTillMidnight} минут`);

/* Напишите программу, которая принимает с клавиатуры два числа, образующих ответ на
вопрос «который час ?» (первое – часы, второе минуты, например, 15 и 42) и выводит на
экран следующие значения(каждое – в отдельной строке): сколько секунд прошло с
полуночи да «данного момента» и сколько минут прошло за это же время, а также сколько
минут осталось до полуночи. */