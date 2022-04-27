/*
  Реализовать класс MemberFactory, имплементирующий паттерн фабрика.
  Данны три класса, описывающие подписки, их типы и стоимость.
  Необходимо сделать код более отзывчивым, абтрагировавшись от конкретики и создать единный интерфейс.

  Результат работы программы:
  Yuriy|simple: 50
  Alex|standard: 150
  Olga|premium: 350
  Ivan|simple: 50
*/

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 350;
  }
}

class MemberFactory {}

const factory = new MemberFactory();
const members = [
  factory.create('Yuriy', 'simple'),
  factory.create('Alex', 'standard'),
  factory.create('Olga', 'premium'),
  factory.create('Ivan'),
];

members.forEach(m => {
  m.define();
})

/*
 * Yuriy|simple: 50
 * Alex|standard: 150
 * Olga|premium: 350
 * Ivan|simple: 50
 */