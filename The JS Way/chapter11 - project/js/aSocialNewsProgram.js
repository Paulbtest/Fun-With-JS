let userInput = 5;

while (userInput != 0) { 
    userInput = 
    Number(prompt("Choose an option: " + "\n" + 
            "1: Show Links" + "\n" + 
            "2: Add a link" + "\n" +
            "3: Remove a link" + "\n" +
            "0: Quit" + "\n"));

    switch(userInput) {
        case 1: 
            console.log("Первый пошел");
            break;
        case 2:
            console.log("Второй пошел");
            break;
        case 3:
            console.log("Третий пошел");
            break;
        case 0:
            console.log("Have a nice day!");
            break;
        case isNaN(true):
            console.log("Введеное значение не является числом.")
            userInput = 5
            break;
        case "":
            userInput = 5;
            break;
    };
};


/* Functional requirements
• A link is defined by its title, its URL and its author(submitter).
• If a new link URL does not start with "http://" or "https://", "http://" is automatically
added to its beginning.
• At launch, the program displays a start menu with the possible actions in an alert window
and asks the user for his choice.Possible actions are:
– Show the list of links.
– Add a new link.
– Remove an existing link.
– Quit the program.
• Showing the list of links displays the index(rank) and the properties of each link in an alert
window, or a message in the absence of any link.
• When adding a link, the program asks the user for the new link properties(title, URL and
author).The link is then created.Subsequently, it must appear in the shown links.
• When removing a link, the user is asked for the link index until it is correct.The associated
link is then removed.Subsequently, it must disappear from the shown links.Removing a
link is not possible if there are no existing links.
• After an action is performed, the start menu is shown again.This goes on until the user
chooses to quit the program. */