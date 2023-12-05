// object
let person: {
  name: string;
  age: number;
} = {
  name: "thuy",
  age: 18,
};
// console.log(person);

// array
let test: (number | string | {})[] = ["hi", 0, { name: "thuy", age: 0 }];
// console.log(test);

// tuple
let tesst2: [string, number?] = ["hi"];
// console.log(tesst2);

// enum
enum API_STATUA {
  PENDDING,
  FULFILLED = "hello",
  REJECTED = "xinchao",
}
let a = API_STATUA.PENDDING;
// console.log(a);

// never
function handele(): never {
  console.log("hi");
  while (true) {}
}

// Union
function add(a: any, b: any) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("error");
}

// type aliases
type num_strType = number | string;
