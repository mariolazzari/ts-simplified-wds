// Pick & Omit
type Task = {
  id: string;
  name: string;
  completed: boolean;
};

// type NewTask = Pick<Task, "name" | "completed">;
type NewTask = Omit<Task, "id">;

function saveTask(task: NewTask) {
  return { ...task, id: crypto.randomUUID() };
}

function renderTodo(task: Task) {
  const div = document.createElement("div");
  div.id = task.id;
}

type Human = {
  name: string;
  age: number;
  sex: "M" | "F";
  address: {
    street: string;
  };
};

type HumanAge = Pick<Human, "name" | "age">;
