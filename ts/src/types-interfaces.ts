// Types
type Person = {
  name: string;
  age: number;
  isDev?: boolean;
};

const mario: Person = {
  name: "Mario",
  age: 48,
  isDev: true,
};

const mary: Person = {
  name: "Mariarosa",
  age: 47,
};

// Interfaces
interface IPerson {
  name: string;
  age: number;
  isDev?: boolean;
}

const iterPerson: IPerson = {
  name: "Mario",
  age: 48,
};
