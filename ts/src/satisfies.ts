type Concert = {
  title: string;
  dueDate: Date | string;
  isComplete: boolean;
};

const concert1 = {
  title: "Concert 1",
  dueDate: new Date(),
  isComplete: false,
} satisfies Concert;

// dueDate is date
console.log(concert1.dueDate.getDay());

const concert2 = {
  title: "Concert 2",
  dueDate: "Last month",
  isComplete: true,
} satisfies Concert;

// dueDate is string
console.log(concert2.dueDate.toUpperCase());
