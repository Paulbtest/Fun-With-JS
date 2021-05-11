let words = [];
let userWord = "";

// if (userWord === 'stop') {
//     console.log(words);
// } else {
//     words.push(userWord);
// };

while (userWord != "stop") {
    userWord = prompt('Type a word to add it to the array. Type "stop" to exit.').toLowerCase();

    if (userWord === 'stop') {
        console.log(words);
        break;
    }

    words.push(userWord);
};


/* Write a program that asks the user for a word until the user types "stop".The program then
shows each of these words, except "stop". */