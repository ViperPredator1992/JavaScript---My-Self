'use strict';

/*
Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. 
Решите задачу

через if, 
через switch-case 
через многомерный массив без ифов и switch.*/

let lang = prompt('Введите язык','');

// if (lang === 'ru') {
//     console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
// } else if (lang === 'en') {
//     console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
// } else {
//     console.log('Что-то не так');
// }

// switch (lang) {
//     case 'ru':
//         console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
//         break;
//     case 'en':
//         console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
//         break;

//     default: console.log('Что-то не так');
//         break;
// }

lang === 'ru' ? console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье') :
lang === 'en' ? console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday') :
lang === '' ? console.log('Что-то не так') : console.log('Что-то не так');

/*У нас есть переменная namePerson. 
Если значение этой переменной “Артем” то вывести в консоль “директор”, 
если значение “Максим” то вывести в консоль “преподаватель”, 
с любым другим значением вывести в консоль “студент”

Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
*/

let namePerson = prompt('Укажите имя', '');

namePerson === 'Артем' ? console.log('директор') :
namePerson === 'Максим' ? console.log('преподаватель') :
namePerson === '' ? console.log('студент') : console.log('студент');