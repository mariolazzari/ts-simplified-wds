// Readonly
type DbUser = {
  readonly id: number;
  name: string;
};

const dbAdmin: DbUser = { id: 1, name: "mario" };
// dbAdmin.id = 2 => error
dbAdmin.name = "Marco";

type NumberArray = readonly number[];
const nums: NumberArray = [1, 2, 3];
// nums.push(1); => error

// only immutable methods in intellisense!
const newArr = nums.map(n => n + 2);
