let linkInfo = function () {
    let foundLinks = Array.from(document.getElementsByTagName("a"));
    let linkCount = foundLinks.length;
    let firstLink = "";
    let lastLink = "";

    if (linkCount >= 1) {
        firstLink = foundLinks[0].href;
        lastLink = foundLinks[linkCount - 1].href;
        return console.log(`${linkCount}\n${firstLink}\n${lastLink}`);
    } else {
        return console.log(`No links found.`)
    };


};

// Show if an element has a class
const has = (id, someClass) => {
    let flag = false;
    let elementId = document.getElementById(id);
    let classCheck = "";

    if (elementId !== null) {
        classCheck = elementId.classList.contains(someClass);
            
        if (classCheck) {
                flag = true;
                return console.log(flag);
            } else {
                return console.log(flag);
            };

    } else {
        console.error(`No element has ID ${id}`);
    };  
};

has("saxophone", "woodwind"); // Should show true
has("saxophone", "brass"); // Should show false
has("trumpet", "brass"); // Should show true
has("contrabass", "chordophone"); // Should show an error message


linkInfo();

/* Improve the previous program to add a has() function that tests if an element designated by its
ID has a class. The function shows true, false or an error message if the element can’t be found.
*/