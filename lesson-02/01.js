// Основной код приложения

// Инициализация dice1
let dice1 = Math.floor(Math.random() * 6) + 1; // Пример значения от 1 до 6

// Функция для проверки доступа пользователя
function checkAccess(isAdmin, hasSpecialPermission) {
  // Разрешён доступ, если пользователь - администратор и имеет специальное разрешение
    const isAccess = isAdmin && hasSpecialPermission;
    return isAccess;
}

// Cypress тесты для проверки доступа
describe('access control tests', () => {
    before(() => {
    // Обработка ошибок в Cypress
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Предотвращение провала теста при необработанном исключении
        return false;
    });
    });

    it('разрешён доступ, если пользователь - администратор и имеет специальное разрешение', () => {
    // Пример условий для проверки
    const isAdmin = true;
    const isVerifiedUser = false;
    const hasSpecialPermission = true;
    const hasTemporaryPass = false;

    // Создание тестового кода, выполняющего проверку
    const testCode = `
        const isAccess = checkAccess(${isAdmin}, ${hasSpecialPermission});
        return isAccess;
    `;
    
    // Создание и выполнение функции с проверкой доступа
    const executeScript = new Function('checkAccess', testCode);
    
    // Выполнение скрипта и проверка результата
    const result = executeScript(checkAccess);
    expect(result).to.be.true; // Ожидается true, так как isAdmin и hasSpecialPermission оба равны true
    });
});
