type num_str = number | string;
const add = (a: num_str, b: num_str): num_str => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    return "ko khớp kiểu";
  }
};
// console.log(add("", 1));

// Func Overloading
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any): any {
  return a + b;
}
// console.log(addNew(1, 4));

// class Overloading
class Couter {
  private curent: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values: number[] = [];
      for (let start = this.curent; start <= target; start++) {
        values.push(start);
      }
      return values;
    }
    return ++this.curent;
  }
}

let counter = new Couter();

console.log(counter.count(20));
