class BankAccount {
    constructor (name) {
    this.name = name;
    this.balance = 0;
    };

    credit(amount) {
        return this.balance += amount;
    };

    describe() {
        return console.log(`Owner: ${this.name}, balance: ${this.balance}.`);
    };
};




let accounts = [];

accounts.push(new BankAccount("Sean"));
accounts.push(new BankAccount("Brad"));
accounts.push(new BankAccount("Georges"));

for (account of accounts) {
    account.credit(1000);
    account.describe();
};


/* 
Let’s build upon a previous account object exercise.A bank account is still defined by:
    • A name property.
    • A balance property, initially set to 0.
    • A credit method adding the value passed as an argument to the account balance.
    • A describe method returning the account description.
Write a program that creates three accounts: one belonging to Sean, another to Brad and the
third one to Georges.These accounts are stored in an array.Next, the program credits 1000 to
each account and shows its description. */

