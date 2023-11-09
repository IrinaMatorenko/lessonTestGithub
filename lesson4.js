'use strict';
let arr = [];
// ------------ task 1 -----------
{
  arr = [1, 2, 3, 4, 5];
  for (let elem of arr) {
    console.log(elem);
  }
}
// ----------- task 2 ---------------
{
  arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
  for (let elem of arr) {
    if (elem > -10 && elem < -3) {
      console.log(elem);
    }
  }
}
// --------------- task 3 --------------
{
  arr = [];
  let result = 0;
  for (let i = 23; i <= 57; i++) {
    arr.push(i);
    result += i;
  }
  console.log(arr);
  console.log(result);
}
// -------------- task 4 ------------------
{
  arr = ['10', '20', '30', '50', '235', '3000'];
  for (let elem of arr) {
    if (elem[0] == 1 || elem[0] == 2 || elem[0] == 5) {
      console.log(+elem);
    }
  }
}
// ------------- task 5 ----------------
{
  let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  for (let i = 0; i < week.length; i++) {
    if (i == 5 || i == 6) {
      document.write('<b>' + week[i] + ' ' + '</b>');
    } else {
      document.write(week[i] + ' ');
    }
  }
}
// ------------ task 6 ------------------
{
  arr = [10, 156, 'apple', 'text', 65, 984, '7'];
  arr.push('lesson');
  console.log(arr[arr.length - 1]);
}
// ------------ task 7 ----------------------
{
  // arr = [];
  // let input = +prompt('Введите число');
  // while (input !== '') {
  //   if (input == null || input === 0) {
  //     break;
  //   }
  //   if (!isNaN(input)) {
  //     arr.push(input);
  //     input = +prompt('Введите число');
  //   }
  // }
  // console.log(arr);
  // let sortArr = arr.sort((a, b) => a - b);
  // console.log(sortArr);
}
// --------------- task 8 ------------------------
{
  arr = [12, false, 'Текст', 4, 2, -5, 0];
  let arrReverse = arr.reverse();
  console.log(arrReverse);
}
// ------- task 9 -------------------------------
{
  arr = [5, 9, 21, , , 9, 78, , , , 6];
  console.log(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === undefined) {
      count += 1;
      console.log(count);
    }
  }
}
// ------------ task 10 --------------------
{
  arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
}
// -------------- task 11 --------------------
{
}
