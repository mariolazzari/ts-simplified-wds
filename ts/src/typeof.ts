// typeof
const man = { name: "mario", age: 48, isDev: true };
const men: (typeof man)[] = [];
men.push(man);

function sayHi(name: string) {
  console.log(`Hi ${name}`);
}

type FuncSayHi = typeof sayHi;

const greet: FuncSayHi = name => console.log(`Hi ${name}`);
