'use strict';
//------1-----------
let str = 'Привет';
let sum = 15.8;
let num = 123;
let flag = true;
let txt = 'true';
console.log(str, typeof str);
console.log(sum, typeof sum);
console.log(num, typeof num);
console.log(flag, typeof flag);
console.log(txt, typeof txt);
//-----------2-------
let a1 = 5 % 3; //2
let a2 = 3 % 5; // 3
let a3 = 5 + '3'; //'53'
let a4 = '5' - 3; //2
let a5 = 75 + 'кг'; //'75кг'
let a6 = 785 * 653; //512605
let a7 = 100 / 25; //4
let a8 = 0 * 0; //0
let a9 = 0 / 2; //0
let a10 = 89 / 0; //Infinity тип number
let a11 = 98 + 2; //100
let a12 = 5 - 98; //-93
let a13 = (8 + 56 * 4) / 5; //46.4
let a14 = ((9 - 12) * 7) / (5 + 2); //-3
let a15 = +'123'; //123
let a16 = 1 || 0; //1
let a17 = false || true; //true
let a18 = true > 0; //true
let a19 = 'ty' * 5; // NaN 'number'
console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
console.log(a19, typeof a19);
//-----------3------------
let width = 10;
let height = 23;
let areaOfRectangle = width * height;
console.log(areaOfRectangle + 'cm'); //230см
//-----------4-------------
let width2 = 10;
let diametr = a7;
let pi = 3.1415;
let volumeCylinder = pi * diametr ** 2 * width2;
console.log(volumeCylinder + 'm');
//----------5--------------
let radius = 5;
let areaOfCircle = pi * diametr ** 2;
console.log(areaOfCircle + 'cm');
//---------6----------------
let base = 5;
let base2 = 7;
let height2 = 10;
let areaTrap = ((base + base2) * height2) / 2;
console.log(areaTrap + 'cm');
//-----------7----------
//----не знаю я как это решить
let sumCredit = 2000000;
let bid = 0.1;
let years = 5 * 12;
let monthlyPayment = (sumCredit / years) * bid; //ежемесячный платёж
let overPayment = monthlyPayment * years - sumCredit;
console.log(overPayment);
//------------9---------------
console.log(`Бывало, спит у ног собака,
костер занявшийся гудит,
и женщина из полумрака
глазами зыбкими глядит.

Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:

"А ну-ка, спой!.."- и я пою.`);
//-------------10---------------
let text = 'индо земля зашаталась под ногами-и вырос,';
let text2 = 'и заревел он голосом диким...';
let text3 = 'блеснула молния и ударил гром,';
let text4 = 'а так какое-то чудище, страшное и мохнатое,';
let text5 = 'как будто из-под земли, перед купцом:';
let text6 = 'Он подошёл и сорвал аленький цветочек.';
let text7 = 'зверь не зверь, человек не человек,';
let text8 = 'В ту же минуту, безо всяких туч,';
console.log(
  text6 +
    '\n' +
    text8 +
    '\n' +
    text3 +
    '\n' +
    text +
    '\n' +
    text5 +
    '\n' +
    text7 +
    '\n' +
    text4 +
    '\n' +
    text2,
);
