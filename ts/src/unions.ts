// Unions
type ID = string | number;

const id1: ID = 7;
const id2: ID = "7";

type Status = "done" | "wip" | "delete";

type Todo = {
  name: string;
  status: Status;
};

const todo1: Todo = {
  name: "Todo 1",
  status: "wip",
};

const todo2: Todo = {
  name: "Todo 2",
  status: "done",
};

type Contact = {
  name: string;
};

type TodoContact = Todo | Contact;
