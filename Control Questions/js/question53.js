let userString = "var_text_hello";

for (let string in userString) {
    userString = userString.replace("_", "");
};

userString = userString.replace("t", "T");
userString = userString.replace("h", "H")

console.log(userString);

// Дана строка вида 'var_text_hello'.Сделайте из него текст 'varTextHello'.