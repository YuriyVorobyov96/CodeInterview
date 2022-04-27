/*
  Существует объект tree, внутри которого есть поля value, left и right. Поля left и
  right в свою очередь тоже являются объектами, внутри котороых есть поля value, left и 
  right, и так какое-то конечное число раз. Необходимо реализовать функцию sumTree,
  которая вернет сумму всех value во всей вложенности. Единственное условие: value есть всегда,
  left и right - не всегда.

         6
        / \
       /   \
      5     \
     / \    10
    3   7   /
   /       4
  1         \
             5
*/

const tree = {
  value: 6,
  left: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
      },
    },
    right: {
      value: 7
    },
  },
  right: {
    value: 10,
    left: {
      value: 4,
      right: {
        value: 5,
      },
    },
  },
};

const sumTree = tree => {};

console.log(sumTree(tree)); // 41
