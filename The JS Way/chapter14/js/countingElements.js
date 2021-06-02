let countElements = function(selector) {
    let foundElement = Array.from(document.querySelectorAll(selector));
    return foundElement.length;
};



// TODO: write the countElements() function here
console.log(countElements("p")); // Should show 4
console.log(countElements(".adjective")); // Should show 3
console.log(countElements("p .adjective")); // Should show 3
console.log(countElements("p > .adjective")); // Should show 2


/* Complete the following program to write the countElements() function, that takes a CSS selector
as a parameter and returns the number of corresponding elements.
 */