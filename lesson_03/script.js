'use strict';

let money = +prompt('Ваш месячный доход?', ''), // деньги (Доход за месяц)
    income = 'Фриланс', // доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ''), // добавить расходы
    deposit = confirm('Есть ли у вас депозит в банке?'), // депозит
    mission = +prompt('Какую сумму хотите накопить', ''), // миссия
    period = +prompt('Число от 1 до 12', ''), // период
    obligatoryMonthlyExpensesOne = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    howMuchCostOne = +prompt('Во сколько это обойдется?', ''), 
    obligatoryMonthlyExpensesTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?', ''),
    howMuchCostTwo = +prompt('Во сколько это обойдется?', ''),
    budgetMonth = money - howMuchCostOne - howMuchCostTwo, // budgetMonth = доход за месяц 
    target = mission / budgetMonth,
    budgetDay = budgetMonth / 30; 
    
    addExpenses.toLowerCase().split(', ');
    console.log(Math.floor(target));
    console.log(Math.ceil(budgetDay));
    
    if (budgetDay >= 800) {
        console.log('Высокий уровень дохода');
    } else if (budgetDay >= 300 && budgetDay < 800) {
        console.log('Средний уровень дохода');
    } else if (budgetDay >= 0 && budgetDay < 300) {
        console.log('Низкий уровень дохода');
    } else if (-budgetDay) {
        console.log('Что то пошло не так');
    }