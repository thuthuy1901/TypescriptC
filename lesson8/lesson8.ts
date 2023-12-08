// static Method
class Circle {
  static pi: number = 3.14;
  public test: number = 10;
  static calculateArea(radio: number) {
    return this.pi * radio * radio;
  }
}
// console.log(Circle.calculateArea(10));

// abstract Classes
abstract class TestP {
  constructor(private name: string, private age: number) {}

  abstract getPhone(): number;

  get Name(): string {
    return `${this.name}`;
  }

  compesationPer(): string {
    return `${this.name},${this.age}`;
  }
}

class TestC extends TestP {
  constructor(name: string, age: number, private phone: number) {
    super(name, age);
  }
  getPhone(): number {
    return this.phone;
  }
}

const testC = new TestC("thuy", 10, 10);
// console.log(testC.Name);

// Interfaces
interface IPerson {
  name: string;
}

function getName(person: IPerson) {
  return `${person.name}`;
}

const person = { name: "Thuy" };
console.log(getName(person));
