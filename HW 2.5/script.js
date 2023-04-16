
function playGame1() {
    let monthNumber = Number(prompt('Введите номер месяца', 'от 1 до 12'));
    switch (monthNumber) {
        case 12:
        case 2:
        case 1:
            console.log('Зима');
            alert('Это зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            alert('Это весна');
            break;
        case 8:
        case 6:
        case 7:
            console.log('Лето');
            alert('Это лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            alert('Это осень');
            break;
        default:
            console.log('Нет такого месяца');
            alert('Нет такого месяца, попробуй еще раз');
            break;
    }
}
function playGame2() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);
    let answer1 = fruits[0];
    let answer2 = fruits[6];
    let userAnswer1 = prompt('Введите первое название фрукта из списка');
    let userAanswer2 = prompt('Введите последнее название фрукта из списка');
    alert((userAnswer1.toLowerCase() == answer1.toLowerCase() && userAanswer2.toLowerCase() == answer2.toLowerCase()) ? "Поздравляем, вы угадали оба фрукта!!!" :
        (userAnswer1.toLowerCase() == answer1.toLowerCase() || userAanswer2.toLowerCase() == answer2.toLowerCase()) ? 'Вы были близки к победе! Но угадали только один фрукт' :
            `Вы ответили неверно. Правильные ответы - ${fruits[0]} и ${fruits[6]}. Попробуйте еще раз.`);

}