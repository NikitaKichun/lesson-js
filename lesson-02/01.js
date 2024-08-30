// Блок кода для контроля доступа
const isAdmin = true; // тестовое значение, можно изменять
const isVerifiedUser = false; // тестовое значение, можно изменять
const hasSpecialPermission = true; // тестовое значение, можно изменять
const hasTemporaryPass = false; // тестовое значение, можно изменять

let isAccess;

// Условия доступа: пользователь должен быть администратором и иметь специальное разрешение
isAccess = isAdmin && hasSpecialPermission;

console.log('Доступ разрешен:', isAccess); // true, если доступ разрешен

// Блок кода для бросков кубиков (если требуется)
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

let isWinningDouble = (dice1 === dice2) && (dice1 > 3);

console.log('Первый бросок:', dice1);
console.log('Второй бросок:', dice2);
if (isWinningDouble) {
  console.log('Выигрышный дубль!');
} else {
  console.log('Не выигрышный дубль.');
}
