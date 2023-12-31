function add(nums: number[]): number;
function add(a: number, b: number): number;
function add(a: number | number[], b?: number) {
  if (Array.isArray(a)) {
    return nums.reduce((prev, curr) => prev + curr);
  }
  if (b) {
    return a + b;
  }

  return a;
}

const s1 = add([1, 2]);
const s2 = add(1, 2);
// const s3 = add([1, 2], 3); => error
