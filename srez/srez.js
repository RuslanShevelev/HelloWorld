// // 1 задание
// function strCount(str,letter) {
// let arr = str.split('').filter(item => item == letter);
// console.log(arr);
// return arr.length;
// } 
// console.log(strCount("Hello", 'o'));
// console.log(strCount("Hello", 'z'));
// console.log(strCount("Hello", 'l'));

// // 2 задание
// function squareSum(arr) {
//     return arr.map(item => item**2).reduce((sum, current) => sum + current, 0);

//     } 
// console.log(squareSum([1, 2, 2]));

// // 3 задание
// function nearestSq(n){
//     return Math.round(Math.sqrt(n))**2;
// }
// console.log(nearestSq(81));

// // 4 задание
// function solution(str){
// return str.split('').reverse().join("");
// }
// console.log(solution('world'));

// // 5 задание
// function addLength(str) {
// return str.split(' ').map((item => item + " " + item.length));
// }
// console.log(addLength('you will win'));

// // 6 задание
// let mango = (q,p) => p*(q - Math.floor(q/3));
// console.log(mango(3, 3));

// // 7 задание
// function litres(time) {
//     return Math.floor(time / 2);
// }
// console.log(litres(1787));

// // 8 задание
// function invert(array) {
//     return array.map (item => -item);
//  }
//  console.log(invert([0]));

// // 9 задание
// function powersOfTwo(n) {
//     const arr = [];
//     for (let i = 0; i <= n; i++) {
//         arr.push(2 ** i);
//     }
//     return arr;
// }
// console.log(powersOfTwo(5));

// // 10 задание
// function getResult(arr) {
// return arr.reduce((mult, current) => mult * current);
// }
// console.log(getResult ([1, 2, 3, 4]));

// function multNumb (a,b,c, ...rest) {
//     return a * b * c * rest.reduce((mult, current) => mult * current);
// }
// const array1 = [1,2,3,4,5,6,7];
// const array2 = [5,6,7];
// console.log(multNumb(...array1));

// const array3 = [...array1, ...array2, 8, 9];
// console.log(array3);


// let myDate = new Date(2023,3,20,13,04);
// console.log(myDate.getHours());

// function fun(numb) {
//     return numb.toString(2).split("0").join("").length;
// }
// console.log(fun(1234));