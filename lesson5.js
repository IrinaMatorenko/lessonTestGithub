'use strict';
//---------------задание 1-----------------------------------------
{
  const getNumber = (a, b, c) => (a - b) / c;
  console.log(getNumber(100, 50, 2));
}

//-----------------задание 2---------------------------------------
{
  const getNumber = n => `Куб числа ${n} равен ${n ** 3}, квадрат числа ${n} равен ${n ** 2}`;
  console.log(getNumber(5));
}

//-----------------задание 3---------------------------------------
{
  function getMinNumber(a, b) {
    return Math.min(a, b);
  }
  console.log(getMinNumber(56, 98));

  const getMaxNumber = (a, b) => Math.max(a, b);
  console.log(getMaxNumber(90, 8));
}

//---------------------задание 4-------------------------------------
{
  function getArrayNumber(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr;
  }
  // function printNumbers(arr) {
  //   console.log(arr);
  // }
  // printNumbers(
  //   getArrayNumber(+prompt('Введите первое значение'), +prompt('Введите второе значение')),
  // );
}

//------------------- задание 5--------------------------------------

const isEven = n => n % 2 === 0; //тройное равно проверяет на логику и выводит true или false
console.log(isEven(9));

//-----------------задание 6-----------------------------------------
{
  const getArrayNumbers = arr => {
    return arr.filter(n => isEven(n));
  };
  console.log(getArrayNumbers([23, 56, 76, 54, 33, 22]));
}

//-------------------- задание 7-----------------------------------------
{
  function drawPyramid(value, param) {
    for (let i = 1; i <= value; i++) {
      let str = '';
      for (let j = 0; j < i; j++) {
        str += param || i;
      }
      console.log(str);
    }
  }
  // drawPyramid(+prompt('Введите любое число'), '*');
}

//------------------задание 8----------------------------------------
{
}
//-----------------задание 9-------------------------------------------
{
  function getArrFibonacci() {
    const arr = [1, 1];
    for (let i = 2; i < 1000; i++) {
      if (i === arr.at(-1) + arr.at(-2)) {
        arr.push(i);
      }
    }
    return arr;
  }
  console.log(getArrFibonacci());
}
//------------------задание 10-----------------------------------------
{
  function getSum(value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
      sum += +value[i];
    }
    if (sum > 9) {
      return getSum(String(sum));
    }
    return sum;
  }
  console.log(getSum('99'));
}
//-------------------задание 11-------------------------------
{
  function outputNumber(arrNumbers) {
    console.log(arrNumbers[0]);
    arrNumbers.splice(0, 1);
    if (arrNumbers.length) {
      outputNumber(arrNumbers);
    }
  }
  console.log(outputNumber([1, 5, 9, 18]));
}
//-----------------------задание 12---------------------------
{
  function longStr(arr) {
    let longStr = 0;
    for (let value of arr) {
      if (value.length > longStr) {
        longStr = value.length;
      }
    }
    return longStr;
  }

  function createData(arr, longStr) {
    for (let i = 0; i < arr.length; i++) {
      const countRepeat = longStr - arr[i].length;
      arr[i] = `* ${arr[i]}${' '.repeat(countRepeat)} *`;
    }
    arr.push('*'.repeat(longStr + 4));
    arr.unshift('*'.repeat(longStr + 4));
  }

  function showInfo(name, group) {
    let arr = ['Домашняя работа: <Функции>', `Выполнил студент группы ${group}`, `${name}`];
    const lsStr = longStr(arr);
    createData(arr, lsStr);
    for (let value of arr) {
      console.log(value);
    }
  }
  showInfo('Маторенко Ирина Григорьевна', 137);
}
