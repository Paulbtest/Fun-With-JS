let userWord = prompt("Please enter a word: ").toLowerCase();
let arrVowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;
let reversedWord = "";

console.log(`The word ${userWord} is ${userWord.length} characters long`);
console.log(userWord.toUpperCase());

for (let i = 0; i < userWord.length; i++) {

    for (let vowel of arrVowels) {
        if (userWord[i] === vowel) {
            vowelCount++;
        };
    };
};

for (let i = userWord.length -1; i >= 0; i--) {
    reversedWord += userWord[i];
}

console.log(`The word ${userWord} has ${vowelCount} vowels`);
console.log(reversedWord);

/* Improve the previous program so that it shows the word written backwards. */