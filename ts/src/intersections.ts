// Intersections
type User = {
  name: string;
  age: number;
};

type Id = {
  id: string;
};

type UserId = User & Id;

const user1: UserId = {
  name: "Mario",
  age: 48,
  id: "1",
};
