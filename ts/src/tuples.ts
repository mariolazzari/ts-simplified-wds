// Tuples
const person2 = {
  name: "Mario",
  age: 48,
};

Object.entries(person2).forEach(([key, value]) => console.log(key, value));

type Tuple = [string, boolean];
const aTuple: Tuple = ["Mario", true];
