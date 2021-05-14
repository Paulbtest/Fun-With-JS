let userWord = prompt("Please enter a word: ");
let arrVowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;

console.log(`The word ${userWord} is ${userWord.length} characters long`);
console.log(userWord.toLowerCase());
console.log(userWord.toUpperCase());

for (let i = 0; i < userWord.length; i++) {
    
    for (let vowel of arrVowels) {
        if (userWord[i] === vowel) {
            vowelCount++;
        };
    };
};

console.log(`The word ${userWord} has ${vowelCount} vowels`);

/* Improve the previous program so that it also shows the number of vowels inside the word */