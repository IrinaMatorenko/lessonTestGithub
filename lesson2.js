'use strict';

// let name = prompt('Введите ваше имя');
// let age = prompt('Сколько вам лет', 20);
let a = 10;
let b = 2;

// ----------- Task 1 -----------
{
  // let city = prompt('Город вашего проживания');
  // let phone = prompt('Введите ваш номер телефона');
  // let email = prompt('Адрес вашей электронной почты');
  // let company = prompt('Название компании');
  // let user = `Меня зовут ${name}, мне ${age} лет. Я живу в городе ${city} и работаю в компании ${company}. Мои контактные данные: телефон ${phone} и почта ${email}`;
  // console.log(user);
}
// ----------- Task 2 --------------
{
  // let year = 2023;
  // let birthYear = year - age;
  // console.log(`${name} родился(-ась) в ${birthYear} году.`);
}

// ----------- Task 3 ---------------
{
  let str = '456456';
  let sum = +str[0] + +str[1] + +str[2];
  let sum2 = +str[3] + +str[4] + +str[5];
  sum == sum2 ? console.log('Да') : console.log('Нет');
}

// --------- Task 4 ------------------
{
  a > 0 ? console.log('Верно') : console.log('Не верно');
}

// --------- Task 5 ------------------
{
  let total = a + b;
  let difference = a - b;
  let piece = a * b;
  let guotient = a / b;
  console.log(total, difference, piece, guotient);
  if (total > 1) {
    console.log(total ** 2);
  }
}

// ------------- Task 6 -------------
{
  (a > 2 && a < 11) || (b >= 6 && b < 14) ? console.log('Верно') : console.log('Не верно');
}

// -------------- Task 7 ------------------
{
  // let n = prompt('Введите число от 0 до 59 что бы определить четверть часа');
  // if (n >= 0 && n <= 15) console.log('Это первая четверть часа');
  // if (n >= 16 && n <= 30) console.log('Это вторая четверть часа');
  // if (n >= 31 && n <= 45) console.log('Это третья четветь часа');
  // if (n >= 46 && n <= 60) console.log('Это четвёртая четверть часа');
}

// ---------------- Task 8 --------------
{
  //let day = prompt('Введите число от 1 до 31 что бы определить декаду месяца');
  // if (day >= 1 && day <= 10) {
  //   console.log('Это первая декада.');
  // } else if (day >= 11 && day <= 20) {
  //   console.log('Это вторая декада.');
  // } else if (day >= 21 && day <= 31) {
  //   console.log('Это третья декада.');
  // } else {
  //   alert('В месяце самое большое 31 день)');
  // }
}
// ---------------- Task 9 ----------------------
{
  // let g = prompt('Сколько это лет? Введите числo', 365);
  // if (g >= 365 && g <= 730) {
  //   alert('Это 1 год');
  // } else if (g >= 731 && g <= 1095) {
  //   alert('Это 2 года');
  // } else if (g >= 1096 && g <= 1460) {
  //   alert('Это 3 года');
  // } else if (g >= 1461 && g <= 1825) {
  //   alert('Это 4 года');
  // } else if (g < 365) {
  //   alert('Меньше года');
  // }
  // //-------------------------------------
  // let days = prompt('Введите количество дней:');
  // let years = days / 365;
  // let months = days / 31;
  // let weeks = days / 7;
  // let hour = days * 24;
  // let minutes = days * 1440;
  // if (years >= 1 && years <= 4.9) {
  //   console.log('Это: ' + years.toFixed() + 'год(-а) .');
  // } else if (years >= 5) {
  //   console.log('Это' + years.toFixed() + 'лет .');
  // } else if (years < 1) {
  //   console.log('Меньше года.');
  // }
  // if (months >= 1) {
  //   console.log(`Это ${months.toFixed(1)} месяц(-a)(-ев)`);
  // } else {
  //   console.log('Это меньше месяца');
  // }
  // if (weeks >= 1 && weeks <= 4.9) {
  //   console.log(`Это ${weeks.toFixed(1)} недели.`);
  // } else if (weeks >= 5) {
  //   console.log(`Это ${weeks.toFixed(1)} недель.`);
  // } else {
  //   console.log('Это меньше недели');
  // }
  // if (hour >= 24) {
  //   console.log(`Это ${hour} часов (-а)`);
  // } else {
  //   console.log('Это меньше суток');
  // }
  // if (minutes >= 1440) {
  //   console.log(`Это ${minutes} минут.`);
  // } else {
  //   console.log('Это меньше суток');
  // }
}

// ------------ Task 10 ----------------
let days = prompt('Какой это месяц? Введите число от 1 до 365', 45);
let month;
if (days >= 1 && days <= 31) {
  alert('Это январь.');
  month = 1;
} else if (days >= 32 && days <= 59) {
  alert('Это февраль.');
  month = 2;
} else if (days >= 60 && days <= 91) {
  alert('Это март.');
  month = 3;
} else if (days >= 92 && days <= 122) {
  alert('Это апрель.');
  month = 4;
} else if (days >= 123 && days <= 154) {
  alert('Это май.');
  month = 5;
} else if (days >= 155 && days <= 185) {
  alert('Это июнь.');
  month = 6;
} else if (days >= 186 && days <= 217) {
  alert('Это июль.');
  month = 7;
} else if (days >= 218 && days <= 248) {
  alert('Это август.');
  month = 8;
} else if (days >= 249 && days <= 279) {
  alert('Это сентябрь.');
  month = 9;
} else if (days >= 280 && days <= 311) {
  alert('Это октябрь.');
  month = 10;
} else if (days >= 312 && days <= 342) {
  alert('Это ноябрь.');
  month = 11;
} else if (days >= 343 && days <= 365) {
  alert('Это декабрь.');
  month = 12;
}

switch (month) {
  case 1:
  case 2:
  case 12:
    alert('Это зима');
    break;
  case 3:
  case 4:
  case 5:
    alert('Это весна');
    break;
  case 6:
  case 7:
  case 8:
    alert('Это лето');
    break;
  case 9:
  case 10:
  case 11:
    alert('Это осень');
    break;
}
