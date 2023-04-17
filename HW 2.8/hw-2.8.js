// Задание 1
function getResult(arr,callback) {
let result = arr.reduce(callback);
console.log(result);
}
let sum = (sum, current) => sum + current;
let mult =(mult, current) => mult * current;
getResult ([3, 4, 1, 9], mult);
getResult ([3, 4, 1, 9], sum);

// Задание 2
const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];
function compareAge(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}
function getSortedArrayObj(arr2) {
    arr2.sort(compareAge);
    console.log(arr2);
}
getSortedArrayObj(users);

// Задание 3
function each(arr, callback) {
    let result = callback(arr);
    console.log(result);
}
let reversArr = (array) => array.reverse();
let toNumberArr = (array) => array.map(Number).filter(item => !Number.isNaN(item));
each([1, '4', 9, 'two'], reversArr); // ['two', 9, '4', 1]
each([1, '4', false, 9, 'two'], toNumberArr); // [1, 4, 0, 9]

// Задание 4
const timer = (deadline) => {
	let time
	const interval = setInterval(() => {
		time =  new Date();
		console.log(time);
	}, 3000);
	setTimeout(() => {
    clearInterval(interval);
    console.log(`${deadline} секунд прошло`)
  }, deadline * 1000)
};
timer(30);

// Задание 5
function calling() {
    console.log('Звоню!')
};
function beeps(collback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        collback();
    }, 1000);
}
function talk() {
    console.log('Разговор')
}
calling();
beeps(talk);