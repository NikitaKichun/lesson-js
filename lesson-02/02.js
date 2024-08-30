// Инициализация переменных для бросков кубиков
let dice1 = Math.floor(Math.random() * 6) + 1; // Генерация случайного числа от 1 до 6
let dice2 = Math.floor(Math.random() * 6) + 1; // Генерация случайного числа от 1 до 6

// Проверка на выигрышный дубль (если требуется)
let isWinningDouble = (dice1 === dice2) && (dice1 > 3);

// Логирование результатов для проверки
console.log('Первый бросок:', dice1);
console.log('Второй бросок:', dice2);
if (isWinningDouble) {
  console.log('Выигрышный дубль!');
} else {
  console.log('Не выигрышный дубль.');
}
