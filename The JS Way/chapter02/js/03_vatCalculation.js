let price = Number(prompt("Enter a product's price "));
let percent = Math.round((price * 20.6) / 100);
let vat = price + percent;

alert(`The final price is ${vat}.`);

/* Write a program that asks the user for a raw price. After that, it calculates 
the corresponding final price using a VAT rate of 20.6 %. */