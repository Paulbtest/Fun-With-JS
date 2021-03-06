let userInput;
let linksRepository = []; //Used to store objects with info about links

class userLink {      //constructs an object to store inside the array
    constructor(name, link, author) {
        this.name = name;
        this.link = link;
        this.author = author;
    }
};

let showLinks = function() { //used to show stored links
    let currentLink = "";

    if (linksRepository.length === 0) {
        return "No links stored yet."
    }

    for (let i = 0; i < linksRepository.length; i++) {
        currentLink += (i) + 1 + ':' + ' ' + `${linksRepository[i].name} (${linksRepository[i].link}). Author: ${linksRepository[i].author}` + "\n";
    };

    return currentLink;
};

let removeLinks = function(index) { //used to remove stored links    
    
    return linksRepository.splice(index - 1, 1);  
};

while (userInput !== "0") { 

    userInput = 
    prompt("Choose an option: " + "\n" + 
            "1: Show Links" + "\n" + 
            "2: Add a link" + "\n" +
            "3: Remove a link" + "\n" +
            "0: Quit" + "\n");

    switch(userInput) {
        case "1":
            alert(showLinks()); 
            break;
        case "2":
            let resourceName = prompt("Enter resource name: ");
            let resourceLink = prompt("Enter the resource link: ");
            let resourceAuthor = prompt("Enter author's name: ");

            if (!resourceLink.startsWith("http://") && !resourceLink.startsWith("https://")) {
                resourceLink = "http://" + resourceLink;
            };

            let newAccount = new userLink(resourceName, resourceLink, resourceAuthor);
            linksRepository.push(newAccount);
            break;
        case "3":
            let toBeRemoved; 
            if (linksRepository.length === 0) {
                toBeRemoved = alert("No links to remove");
            } else {
                toBeRemoved = prompt(`Enter index of the link to be removed (between 1 and ${linksRepository.length}). Type ${linksRepository.length + 1} to cancel: `);
                removeLinks(toBeRemoved)
            };

            break;
    };
};

alert("Have a nice day!");

/* Functional requirements
??? A link is defined by its title, its URL and its author(submitter).
??? If a new link URL does not start with "http://" or "https://", "http://" is automatically
added to its beginning.
??? At launch, the program displays a start menu with the possible actions in an alert window
and asks the user for his choice.Possible actions are:
??? Show the list of links.
??? Add a new link.
??? Remove an existing link.
??? Quit the program.
??? Showing the list of links displays the index(rank) and the properties of each link in an alert
window, or a message in the absence of any link.
??? When adding a link, the program asks the user for the new link properties(title, URL and
author).The link is then created.Subsequently, it must appear in the shown links.
??? When removing a link, the user is asked for the link index until it is correct.The associated
link is then removed.Subsequently, it must disappear from the shown links.Removing a
link is not possible if there are no existing links.
??? After an action is performed, the start menu is shown again.This goes on until the user
chooses to quit the program. */