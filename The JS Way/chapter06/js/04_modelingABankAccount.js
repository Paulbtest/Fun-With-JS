const bankAccount = {
    name: "Alex",
    balance: 0,

    credit(amount) {
        return this.balance += amount;
    },

    describe() {
        return console.log(`Owner: ${this.name}, balance: ${this.balance}.`);
    }
};

bankAccount.describe(); // Initial account balance.

bankAccount.credit(250); // Crediting 250.
bankAccount.credit(-80); // Debiting 80.

bankAccount.describe(); // Final account balance.

/* Modeling a bank account

Write a program that creates an account object with the following characteristics:
• A name property set to “Alex”.
• A balance property set to 0.
• A credit method adding the(positive or negative) value passed as an argument to the
account balance.
• A describe method returning the account description.

Use this object to show its description, crediting 250, debiting 80, then show its description again. */