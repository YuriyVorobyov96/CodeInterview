/*
  Реализовать класс Observable, имплементирующий паттерн наблюдатель.
  Необходимо создать обработчик событий с возможностью подписки, отписки и рассылки сообщений.

  Результат работы программы:
  Hello I have fired
  And goodbye I have fired
*/

class Observable {}

const sub1 = (msg) => console.log('Hello ' + msg)
const sub2 = (msg) => console.log('And goodbye ' + msg)
const sub3 = (msg) => console.log(msg + ' foo ' + msg)

const observable = new Observable()

observable.subscribe(sub1);
observable.subscribe(sub2);
observable.subscribe(sub3);
observable.unsubscribe(sub2);

observable.sendMessage('I have fired')
