
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