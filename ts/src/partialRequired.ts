// Partial & Required
type MyTodo = {
  title: string;
  completed: boolean;
  // deep nesting not working on required n
  address: {
    street?: string;
  };
};

type PartialTodo = Partial<MyTodo>;
type RequiredTodo = Required<MyTodo>;

type RequiredTitle = Required<Pick<MyTodo, "title">> &
  Partial<Omit<MyTodo, "title">>;

const myTodo: RequiredTitle = {
  title: "Mandatory",
  completed: false,
};

type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>> & T;
type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
