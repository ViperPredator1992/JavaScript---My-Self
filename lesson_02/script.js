'use strict';

let money = +prompt('Введите число', ''), // деньги (Доход за месяц)
    income = 'Фриланс', // доход
    addExpenses = prompt('Перечислите расходы за рассчитываемый период через запятую', ''), // добавить расходы
    deposit = false, // депозит
    mission = prompt('Какую сумму хотите накопить', ''), // миссия
    period = prompt('Число от 1 до 12', ''), // период
    budgetDay = money / 30; // дневной бюджет
    
    addExpenses.toLowerCase().split(', ');
    console.log("TCL: addExpenses", addExpenses.toLowerCase().split(', '))
    
    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    
    console.log(income.length);
    
    console.log(`Период ${period} месяцев и цель заработать ${mission} рублей/долларов/гривен/юани`);
    
    console.log("budgetDay", budgetDay + ' ' + 'Остаток от деления ' + money % 30 );


    