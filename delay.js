/*
  Реализовать встроенную функцию delay(), которую можно вызвать у любой функции.

  type delay = (ms: number) => void;

  Результат работы программы:
  arg1 arg2
  argSecond1 argSecond2
  *спустя 2 секунды*
  arg1Delay arg2Delay
  *спустя 5 секунд*
  argSecond1Delay argSecond2Delay
*/

function someFn() {
  console.log(arguments);
}

function someSecondFn() {
  console.log(arguments);
}

someFn('arg1', 'arg2');
someSecondFn('argSecond1', 'argSecond2');

const someFnWithDelay = someFn.delay(2000);
const someSecondFnWithDelay = someSecondFn.delay(5000);

someFnWithDelay('arg1Delay', 'arg2Delay');
someSecondFnWithDelay('argSecond1Delay', 'argSecond2Delay');
