const input = document.querySelector<HTMLInputElement>(".input");

console.log(input?.value);

function getSecond<T>(array: T[]): T | undefined {
  if (array.length < 2) {
    return undefined;
  }

  return array[1];
}

const arrNums = [1, 2, 3];
const arrStr = ["1", "2", "3"];

const secondNum = getSecond(arrNums);
const secondStr = getSecond(arrStr);

const aSet = new Set<string>();
aSet.add("Mario");

const aMap = new Map<string, number>();
aMap.set("Mario", 48);

// constraint and default value
type ApiResponse<T extends object = { status: number }> = {
  data: T;
  error?: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
const apiRes: UserResponse = {
  data: {
    name: "Mario",
    age: 48,
  },
};

type BlogResponse = ApiResponse<{ title: string }>;
const blogRes: BlogResponse = {
  data: {
    title: "Blog title",
  },
};

const defRes: ApiResponse = {
  data: {
    status: 200,
  },
};

// Array generics
const arNums: Array<number> = [1, 2, 3];

function arrToObj<T>(array: [string, T][]) {
  const obj: { [index: string]: T } = {};

  array.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

const arrNested: [string, number | boolean][] = [
  ["keyOne", 1],
  ["keyTwo", 2],
  ["keyThree", true],
];

const objArr = arrToObj(arrNested);
