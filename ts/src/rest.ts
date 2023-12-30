// Destructuring
type Options = {
  debugMode?: boolean;
  logLevel?: number;
};

function printNameAndAge(
  name: string,
  { debugMode = false, logLevel }: Options = {}
) {
  console.log(name, debugMode, logLevel);
}

printNameAndAge("Mario");
printNameAndAge("Mary", { debugMode: true });
printNameAndAge("Maria", { logLevel: 1 });

// Rest operator
function sum(...nums: number[]) {
  return nums.reduce((prev, curr) => prev + curr);
}

let val = sum(1, 2);
console.log(val);
val = sum(1, 2, 3);
console.log(val);
