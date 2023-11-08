'use strict';
let num = 1;
let sum = 0;
//-------- task 1 -----------------
{
  while (num <= 50) {
    console.log(num);
    num++;
  }
  for (let i = 35; i >= 8; i--) {
    document.write(i + ' ');
  }
}
//----------- task 2 -------------
{
  num = 89;
  while (num >= 11) {
    document.write(num + '<br />');
    num--;
  }
}
//---------------- task 3 ----------------
{
  // for (let i = 0; i <= 100; i++) {
  //   console.log(i);
  //   sum += i;
  // }
  // console.log(sum);
}
//----------------- task 4 ---------------
{
  for (let i = 1; i <= 5; i++) {
    sum = 0;
    for (let k = 1; k <= i; k++) {
      sum += k;
    }
    console.log('Сумма числа ' + i + ' = ' + sum);
  }
}
//--------------- task 5 ------------------
{
  for (let i = 8; i <= 56; i++) {
    if (i % 2 !== 0) continue;
    document.write(i + ' ');
  }
}
//----------- task 6 -----------------------
{
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      document.write(`${i} * ${j} = ${j * i}<br />`);
    }
    document.write('<br />');
  }
}
//--------------- task 7 ---------------------
{
  let n = 1000;
  let it = 0;
  while (n >= 50) {
    n = n / 2;
    it++;
  }
  console.log(`Полученная сумма равна ${n}, количество итераций равно ${it}`);
}
//----------------- task 8 ---------------------
{
  // let count = 0;
  // sum = 0;
  // while (true) {
  //   let number = +prompt('Введите любое число');
  //   if (number === 0 || number == null) {
  //     break;
  //   }
  //   if (!isNaN(number)) {
  //     sum += number;
  //     count++;
  //   }
  // }
  // let arif = isNaN(sum / count) ? 0 : sum / count;
  // console.log(`Общая сумма равна ${sum} и среднее арифметическое равно ${arif}`);
}
//---------------- task 9 -------------------------
// переписала не поняв как это работает
{
  let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
  let max = str[0];
  let min = str[0];
  let str2 = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i + 1] === ' ') {
      str2 = Number(str[i - 1] + str[i]);
      if (str2 > max) {
        max = str2;
      }
      if (str2 < min) {
        min = str2;
      }
    }
  }
  console.log(`минимальное число = ${min}, максимальное число = ${max}`);
}
//---------- task 10 ----------------
// не решила((
