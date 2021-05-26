let currentUrl = window.location.href;

console.log(currentUrl);

if (currentUrl.startsWith("http://")) {
    console.log("Адрес текущей страницы начинается с http://")
} else {
    console.log("Адрес текущей страницы не начинается с http://")
};