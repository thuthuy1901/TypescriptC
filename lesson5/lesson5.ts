// Parameters
const sum = (x: number, y?: number) => {
  if (y) return x + y;
  return x;
};

const sum2 = (x: number, y: number, z = false) => {
  if (z) {
    return x + y;
  } else {
    return x - y;
  }
};
// console.log(sum2(10, 5));

//  Rest Parameters
const sum3 = (...number: number[]): number => {
  let total = 0;
  number.forEach((num) => (total += num));
  return total;
};
// console.log(sum3(1, 2, 3, 4));

const multiply = (a: number, ...x: number[]): number[] => {
  return x.map((item) => item * a);
};
// console.log(multiply(10, 1, 2, 3));
