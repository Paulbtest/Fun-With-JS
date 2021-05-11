let musketeers = ['Athos', 'Porthos', "Aramis"];

console.log("Initial array: ");
for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
};

musketeers.push("D'Artagnan");

console.log("After adding D'Artagnan:")
musketeers.forEach(musketeer => {
    console.log(musketeer);
});

console.log("After removing Aramis:")
musketeers.splice(2, 1);
for (let musketeer of musketeers) {
    console.log(musketeer);
};

/* Write a program that:
• Creates an array named musketeers containing values “Athos”, “Porthos” and “Aramis”.
• Shows each array element using a for loop.
• Adds the “D’Artagnan” value to the array.
• Shows each array element using the forEach() method.
• Remove poor Aramis.
• Shows each array element using a for-of loop */