/*
  Реализовать класс MyEventEmitter, имплементирующий паттерн наблюдатель.
  Необходимо создать обработчик событий с возможностью подписки и рассылки слушателям.

  Результат работы программы:
  1, 1
  1, 2
*/

class MyEventEmitter {
  
}

const myEventEmitter = new MyEventEmitter();

myEventEmitter.on((data) => console.log(data, '1'));
myEventEmitter.on((data) => console.log(data, '2'));
myEventEmitter.emit(1);

/*
 * Expected result:
 * 1, 1
 * 1, 2
 */