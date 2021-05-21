const images = document.querySelectorAll("img")
for (const image of images) {
    image.addEventListener('click', function () {
        alert(image.src)
    })
}

/* Даны картинки.Привяжите к каждой картинке событие, чтобы по клику на картинку
алертом выводился ее src.
 */