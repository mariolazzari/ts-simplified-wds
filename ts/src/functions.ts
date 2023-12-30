// Functions
function printName(name: string, age: number): void {
  console.log(name, age);
}

function sum(a: number, b: number): number {
  return a + b;
}

const c = sum(1, 2);

function printPerson(person: { name: string }) {
  console.log(person.name);
}

const p1 = { name: "Mario", age: 48 };
printPerson(p1);
