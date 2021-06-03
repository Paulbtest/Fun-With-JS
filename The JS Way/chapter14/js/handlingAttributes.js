let linkInfo = function() {
    let foundLinks = Array.from(document.getElementsByTagName("a"));
    let linkCount = foundLinks.length;
    let firstLink = "";
    let lastLink = "";

    if (linkCount >= 1) {
        firstLink = foundLinks[0].href;
        lastLink = foundLinks[linkCount - 1].href;
        return console.log(`${linkCount}\n${firstLink}\n${lastLink}`);
    }   else {
        return console.log(`No links found.`)
    };

    
};

linkInfo();

/* Write a JavaScript program containing a linkInfo() function that shows:
• The total number of links.
• The target of the first and last links. 

This function should work even if no links are present. */