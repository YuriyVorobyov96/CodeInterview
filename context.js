/* Что покажет консоль? */

const a = {
  b: 1,
  c: () => {
    console.log(this.b);
  },
  d() {
    console.log(this.b);
  },
  get e() {
    console.log(this.b);
    return this.b;
  }
}

a.c();
a.c.call({ b: 2 });
a.d();
a.d.apply({ b: 3 });
a.e();
a.e;
