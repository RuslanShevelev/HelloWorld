// Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) break;
}

// Задание 2
numbs.forEach((el,index) => {
	if (el == 4) 
	console.log(`${index}`);
});

// Задание 3
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');
console.log(numbers);

// Задание 4
const arr = [];
for (let i = 0; i <=2; i++) {
arr.push([]);
 for (let j = 0; j <=2; j++) {
arr[i].push(1);
}
}
console.log(arr);

// Задание 5
const ones = [1, 1, 1];
ones.push(2,2,2);
console.log(ones);

// Задание 6
let sortedNum = [9, 8, 7, 'a', 6, 5].sort().filter(Number);
console.log(sortedNum);

// Задание 7
let arr1 = [9, 8, 7, 6, 5];
let a = Number(prompt ('Введите число','от 1 до 10'));
alert(`${a} ${(arr1.includes(a))? 'содержится' : 'не содержится'} в данном массиве`);

// Задание 8
let werbs = 'abcdef';
console.log(werbs = werbs.split('').reverse().join(""));

// Задание 9
let arr2 = [[1, 2, 3,], [4, 5, 6]].join(",").split(",");
console.log(arr2.map(string => +string));

// Задание 10
const arr3 = [2, 5, 6, 4, 3, 1, 7];
for (let e = 0; e < arr3.length-1; e++) {
    console.log(arr3[e] + arr3[e + 1]);
}

// Задание 11
let arr4=[1,2,3,4,5,6,7,8,9,10];
let getSquare = (item) => item**2;
console.log(arr4.map(getSquare));

// Задание 12
function getLengthWords(arr5) {
    arr6 = arr5.map(item => item.length);
    console.log(arr6);
}
getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);

// Задание 13
let arr7 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
function lessThanZero(unsorted) {
    let filtered = unsorted.filter(item => item < 0);
    console.log(filtered);
}
lessThanZero(arr7);

// Задание 14
const randomNumbs = [];
for (let i = 0; i < 10; i++) {
    randomNumbs.push(Math.floor(Math.random() * 11));
}
let evenNumbers = randomNumbs.filter(item => item%2 == 0);
console.log(randomNumbs,evenNumbers);

// Задание 15
const randomNums = [];
for (let i = 0; i < 6; i++) {
    randomNums.push(Math.floor(Math.random() * (11 - 1)) + 1);
}
let average = (randomNums.reduce((sum, current) => sum + current, 0)) / randomNums.length;
console.log(`${randomNums} среднее арифметическое - ${average}`);