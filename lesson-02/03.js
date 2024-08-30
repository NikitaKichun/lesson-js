// Основной код приложения

// Инициализация переменной dice1
let dice1 = Math.floor(Math.random() * 6) + 1; // Пример: бросок кубика, значение от 1 до 6

// Пример кода для расчёта оценки на основе балла
function calculateGrade(score) {
    let grade;

  // Логика для выставления оценки
    if (score >= 90) {
    grade = 'A';
    } else if (score >= 80) {
    grade = 'B';
    } else if (score >= 70) {
    grade = 'C';
    } else if (score >= 60) {
    grade = 'D';
    } else {
    grade = 'F';
    }

    return grade;
}

// Cypress тесты для проверки функции calculateGrade
describe('grade calculation tests', () => {
    before(() => {
    // Инициализация всех переменных, необходимых для тестов
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Эта строка отключает автофейл теста при необработанных исключениях
        return false;
    });
    });

    it('должен выставить оценку F для балла 45', () => {
    // Использование функции для расчёта оценки
    const score = 45;
    const expectedGrade = 'F';

    // Подготовка тестового кода без исходных деклараций
    const studentCodeWithoutDeclarations = removeOriginalDeclarations(this.studentCode, ['score']);
    const testCode = `let score = ${score}; ${studentCodeWithoutDeclarations}; return grade;`;
    const executeScript = new Function(testCode);
    
    // Исполнение и проверка
    const grade = executeScript();
    expect(grade).to.equal(expectedGrade);
    });
});