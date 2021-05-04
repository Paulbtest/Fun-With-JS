let trapezoidValueFirst = Number(prompt("Введите значение первого основания трапеции."));
let trapezoidValueSecond = Number(prompt("Введите значение второго основания трапеции."));
let trapezoidHeight = Number(prompt("Введите значение высоты трапеции"));

if (isNaN(trapezoidValueFirst) || isNaN(trapezoidValueSecond) || isNaN(trapezoidHeight)) {
    console.log("Invalid input. Please try again.")
} else {
let trapezoidCalculation = ((trapezoidValueFirst + trapezoidValueSecond) / 2) * trapezoidHeight;
console.log("Площадь трапеции будет равна " + trapezoidCalculation);
};

/* Пользователь вводит длину оснований трапеции(a и b), а также высоту трапеции h.
Программа выводит сообщение: «Площадь трапеции будет равна < значение >».Площадь
вычисляется по формуле((a + b) / 2) * h, где a, b - основания, h - высота */