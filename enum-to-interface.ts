/*
  Имеется enum Colors, необходимо создать протипизировать объект obj
  таким образом, чтобы при добавлении ключа, отсутствующего в enum, выдавалась ошибка

  Программист уже написал интерфейс, но его работа некорректна
*/

export enum Colors {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

interface ColorInterface {
  [key: string]: boolean;
}

const obj: ColorInterface = {
  green: true,
  blue: true,
  test: true, // нет ошибки
};

console.log(obj);