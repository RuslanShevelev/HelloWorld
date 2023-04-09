// Задание 1
function getLess(a, b) {
    return ((a <= b) ? a : b);
}
console.log(getLess(8, 4));

// Задание 2

function checkParity(с) {
    return ((с % 2 == 0) ? 'Число четное' : 'Число нечетное');
}
console.log(checkParity(10));

// Задание 3.1
function showSquare(d) {
    console.log(d = d ** 2);
}
showSquare(3);

// Задание 3.2
function getSquare(e) {
    return (e ** 2);
}
let result = getSquare(15);
console.log(result);

// Задание 4
let age = prompt('Сколько вам лет?', 13);
let checkAge = (age < 0) ?
    () => alert('Вы ввели неправильное значение') :
    (age < 13) ?
        () => alert('Привет, друг!') :
        () => alert('Добро пожаловать!');

checkAge();

// Задание 5
function mult() {
    let f = prompt('Введите первое число');
    let g = prompt('Введите второе число');
    return ((isNaN(f) || isNaN(g)) ? 'Одно или оба значения не являются числом' : f * g);
}
console.log(mult());

// Задание 6
let h = prompt('Введите число');
function getCube() {
    return ((isNaN(h)) ? 'Переданный параметр не является числом' : `${h} в кубе равняется ${h ** 3}`);
}
console.log(getCube());
h = 1;
while (h <= 10) {
    console.log(getCube());
    h++;
}

// Задание 7
const circle1 = {
    radius: 11,
    area: getArea,
    perimeter: getPerimeter
}
const circle2 = {
    radius: 28,
    area: getArea,
    perimeter: getPerimeter
}
function getArea() {
    return (`${Math.PI * this.radius ** 2}`);
}
function getPerimeter() {
    return (`${2 * Math.PI * this.radius}`);
}
console.log(circle1.area());
console.log(circle2.perimeter());