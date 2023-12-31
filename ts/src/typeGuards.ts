type TodoEvent = {
  title: string;
  priority: "Low" | "Normal" | "High";
  isCompleted: boolean;
  description?: string;
  dueDate: string | Date | number;
};

function extendTodo(todo: TodoEvent) {
  // typeof
  if (typeof todo.dueDate === "string") {
    // string
    console.log(todo.dueDate.length);
  } else if (typeof todo.dueDate === "number") {
    console.log(todo.dueDate.toFixed());
  } else {
    // date
    console.log(todo.dueDate.getDay());
  }

  // instanceof
  if (todo.dueDate instanceof Date) {
    // date
    console.log(todo.dueDate.getFullYear());
  }

  // optional
  if (todo.description) {
    console.log(todo.description.length);
  }

  // switch priority
  switch (todo.priority) {
    case "High":
      console.log("!!!");
      break;

    case "Normal":
      console.log("!!");
      break;

    case "Low":
      console.log("!");
      break;
  }
}

const form = document.querySelector<HTMLFormElement>(".form");
// check null
form?.addEventListener("submit", e => e.preventDefault());
// remove check
// form!.addEventListener("submit", e => e.preventDefault());
