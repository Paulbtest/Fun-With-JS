let min = Math.round(Math.random() * 59);

switch(true) {
    case min <= 15:
        console.log(`${min} попадает в первую четверть часа.`);
        break;
    case min <= 30:
        console.log(`${min} попадает во вторую четверть часа.`);
        break;
    case min <= 45:
        console.log(`${min} попадает в третью четверть часа.`);
        break;
    case min <= 59:
        console.log(`${min} попадает в четвертую четверть часа.`);
        break;
};


/* В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это
число(в первую, вторую, третью или четвертую). */