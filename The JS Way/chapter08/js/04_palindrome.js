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

for (let i = userWord.length - 1; i >= 0; i--) {
    reversedWord += userWord[i];
}

console.log(`The word ${userWord} has ${vowelCount} vowels`);
console.log(reversedWord);

if (reversedWord === userWord) {
    console.log(`The word ${userWord} is a palindrome.`);
} else {
    console.log(`The word ${userWord} is not a palyndrome`);
};

/* Improve the previous program to check if the word is a palindrome.A palindrome is a word or
sentence that’s spelled the same way both forward and backward, ignoring punctuation, case,
and spacing.

"radar" should be detected as a palindrome, "Radar" too */