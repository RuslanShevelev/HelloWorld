// Задание 1
let password = 'qwerty';
let answer = prompt('«Введите пароль»');
if (password == answer) { alert('Пароль введен верно'); }
else { alert('Пароль введен неправильно') };

// Задание 2
let c = 2;
if (c > 0 && c < 10) { console.log('Верно') } else { console.log('Неверно') };

// Задание 3
let d = 8, e = 150;
(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

// Задание 4
let a = '2', b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 12:
    case 2:
    case 1:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 8:
    case 6:
    case 7:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Нет такого месяца');
        break;
}

// Задание 7
let num = prompt('Пожалуйста, введите любое число');
if (isNaN(num)) { alert('Нужно ввести число') }
else if (num % 2 == 0) { alert('Число четное') }
else { alert('Число нечетное') };


// Задание 8 (в комментах т.к. переменная конфликтует с заданием 9)
// let clientOS = Number(prompt('Какая операционная система у вашего телефона? (0 — iOS, 1 — Android)'));
// if (clientOS == 1) {
//     alert('Установите версию приложения для Android по ссылке')
// } else if (clientOS == 0) {
//     alert('Установите версию приложения для iOS по ссылке')
// } else {
//     alert('К сожалению, можно выбрать только из "0" и "1"')
// };

// Задание 9.0
let clientOS = Number(prompt('Какая операционная система у вашего телефона? (0 — iOS, 1 — Android)'));
let clientDeviceYear;
if (clientOS == 1) {
    clientDeviceYear = Number(prompt('Сообщите год выпуска модели вашего телефона'));
    (clientDeviceYear >= 2015) ? alert('Установите версию приложения для Android по ссылке') : alert('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOS == 0) {
    clientDeviceYear = Number(prompt('Сообщите год выпуска модели вашего телефона'));
    (clientDeviceYear >= 2015) ? alert('Установите версию приложения для iOS по ссылке') : alert('Установите облегченную версию приложения для iOS по ссылке');
} else {
    alert('К сожалению, можно выбрать только из "0" и "1"')
};