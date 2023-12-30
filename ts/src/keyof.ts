// keyof
type Friend = {
  name: string;
  age: number;
  isDev?: boolean;
};

function getValue(friend: Friend, key: keyof Friend) {
  return friend[key];
}

const friend: Friend = {
  name: "Mario",
  age: 48,
  isDev: true,
};

const frName = getValue(friend, "name");
getValue(friend, "isDev");
