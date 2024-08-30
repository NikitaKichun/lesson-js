// Генерация случайного числа от 1 до 6 для каждого кубика
dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;

// Проверка на выигрышный дубль: оба кубика показывают одно и то же число, и это число больше 3
isWinningDouble = (dice1 === dice2) && (dice1 > 3);

// Логирование результатов для проверки
console.log('Первый бросок: ' + dice1);
console.log('Второй бросок: ' + dice2);
if (isWinningDouble) {
  console.log('Выигрышный дубль!');
} else {
  console.log('Не выигрышный дубль.');
}
