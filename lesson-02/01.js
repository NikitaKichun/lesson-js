// Объединенный код с логикой и тестами

// Функция для проверки доступа
function checkAccess(isAdmin, hasSpecialPermission) {
    return isAdmin && hasSpecialPermission;
    }
    
  // Функция для определения оценки
    function determineGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 50 && score <= 69) {
        return 'D';
    } else if (score >= 0 && score <= 49) {
        return 'F';
    } else {
      return 'Invalid score'; // на случай неверного значения
    }
    }
    
  // Пример значений для проверки доступа
  const isAdmin = true; // измените на false для тестирования
  const hasSpecialPermission = true; // измените на false для тестирования
    
  // Пример значений для оценки
  const score = 45; // измените на другой балл для тестирования
    
  // Проверка доступа
    const isAccess = checkAccess(isAdmin, hasSpecialPermission);
    
  // Определение оценки
    const grade = determineGrade(score);
    
  // Логирование результатов
  console.log('Доступ разрешен:', isAccess); // true или false
  console.log('Оценка студента:', grade); // Ожидается 'F' для балла 45
    
  // Тесты Cypress (для тестирования в Cypress используйте этот код в файле с расширением .spec.js)
    describe('Access Control Tests', () => {
    it('should allow access if user is an admin and has special permission', () => {
      // Проверка доступа
        expect(isAccess).to.be.true;
    });
    
    it('should deny access if user is not an admin but has special permission', () => {
      // Переключите значения для тестирования
        const isAdmin = false;
        const hasSpecialPermission = true;
        const isAccess = checkAccess(isAdmin, hasSpecialPermission);
    
      // Проверка доступа
        expect(isAccess).to.be.false;
    });
    });
    
    describe('Grade Calculation Tests', () => {
    it('should assign grade F for score 45', () => {
      // Проверка оценки
        expect(grade).to.equal('F');
    });
    
    // Вы можете добавить дополнительные тесты для других баллов
    });
