const string = "aaa bbb ccc";

//Через substr
let substr = string.substr(0, 3) + " " + string.substr(8, 3);
console.log(`Через substr: ${substr}`);

//Через substring
let substring = string.substring(0, 3) + " " + string.substring(8);
console.log(`Через substring: ${substring}`);

//через slice
let slice = string.slice(0, 3) + " " + string.slice(-3);
console.log(`Через slice: ${slice}`);

/* Дана строка 'aaa bbb ccc'.Вырежите из нее слово 'bbb' тремя разными способами(через
substr, substring, slice).
 */