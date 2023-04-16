// Задание 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задание 2
function searchStart(anyStr, searchStr) {
    let filteredStr = anyStr.filter(item => item.toLowerCase().startsWith(searchStr.toLowerCase()));
    console.log(filteredStr);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

// Задание 3
let num = 32.58884;
console.log(`Округление до меньшего целого - ${Math.floor(num)}`);
console.log(`Округление до большего целого - ${Math.ceil(num)}`);
console.log(`Округление до ближайшего целого - ${Math.round(num)}`);

// Задание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5
function getRandom() {
    return Math.round(Math.random() * 9) + 1;
}
console.log(getRandom());

// Задание 6
function getRandomArrNumbers(maxValue) {
    let arr = [];
    for (let i = 0; i < Math.floor(maxValue / 2); i++) {
        arr.push(Math.round(Math.random() * maxValue));
    }
    console.log(arr);
}
getRandomArrNumbers(7);
getRandomArrNumbers(12);

// Задание 7
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}
console.log(getRandomInt(10, 15));

// Задание 8
let myDate = new Date();
console.log(myDate);

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
function checkDay(inpDate) {
    myDate = new Date(inpDate);
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
    let minute = myDate.getMinutes();
    if (minute < 10) { minute = "0" + minute; }
    let second = myDate.getSeconds();
    if (second < 10) { second = "0" + second; }
    let time = 'Время: ' + myDate.getHours() + ':' + minute + ':' + second;
    console.log(fullDate);
    console.log(time);
}
checkDay('April 14, 2023 14:48:30');



