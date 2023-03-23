// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
let iPhoneborn = "год выпуска первого iPhone";
alert(iPhoneborn);

// Задание 3
let jsAuthorname = "Brendan Eich";
alert(jsAuthorname);

// Задание 4
let b = 10, c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
a = 9, b = 2;
alert(a % b);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9.0
const user = {
    name: 'Ruslan',
    age: 42,
    isAdmin: true
}

// Задание 9.1
user['city of residence'] = 'Syktyvkar';

// Задание 9.2
user.age = 44;

// Задание 9.3
delete user['city of residence'];
console.log(user);

// Задание 9.4
let info = prompt('Какую информацию хотите узнать o пользователе?', 'age');
alert(user[info]);

// Задание 10
let userName = prompt('Сообщите ваше имя');
alert(`Привет ,${userName}!`);

