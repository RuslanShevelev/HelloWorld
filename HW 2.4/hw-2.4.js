// Задание 1
let i = 1;
while (i < 3) { 
  console.log( 'Привет' );
  i++;
}

// Задание 2
let a = 1;
while (a <= 5) { 
  console.log( a );
  a++;
}

// Задание 3
for(let b = 0;b<=22;b++){
if(b<7)continue;
console.log(b);
}

// Задание 4
const obj ={
'Коля':200,
'Вася':300,
'Петя':400
};
for(let worker in obj){
    console.log(`${worker} - зарплата ${obj[worker]} долларов.`);
}

// Задание 5
let n = 1000, num = 0;
do {
    num++;
    n = n / 2;
}
while (n >= 50);
console.log(n, num);


// Задание 6
for(let friday=3; friday<=31;friday+=7){
    alert(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}