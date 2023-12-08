// truoc ES6
// function Person(name: string, age: number) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.getInfo = function () {
//   return `${this.name}, ${this.age}`;
// };

// let thuy = new Person("thuy", 18);
// console.log(thuy.getInfo());

// ES6 class
class PersonClass {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getInfo(): string {
    return `Name: ${this.name}, \nAge: ${this.age}`;
  }
}

const Thuy = new PersonClass("Thuy", 18);
// console.log(Thuy.getInfo());

// Access Modifiers
class TestParent {
  public test1: string;
  private test2: string;
  //   protected test3: string;

  constructor(test1: string, test2: string) {
    this.test1 = test1;
    this.test2 = test2;
  }
}

class TestChild extends TestParent {
  constructor(test1: string, test2: string) {
    super(test1, test2);
  }
}

// const test = new TestChild("test", "test", "test");
// test.test1 = "newTest";
// test.test2 = "newTest";
// console.log(test);

// readOnly
class Day {
  readonly date: Date;
  constructor(date: Date) {
    this.date = date;
  }
}

let day = new Day(new Date(2002, 12, 25));
// console

// getter và setter
class Person2 {
  public name: string;
  private _age: number;

  constructor(name: string, _age: number) {
    this.name = name;
    this._age = _age;
  }

  // getter
  get Age() {
    return this._age;
  }

  // setter
  set age(age2: number) {
    if (age2 < 0 || age2 > 150) {
      throw Error("loi");
    }
    this._age = age2;
  }
}

const tra = new Person2("tra", 18);
tra.age = 10;
console.log(tra.Age);
