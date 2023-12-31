type Man = {
  name: string;
};

type Box = {
  title: string;
};

function print1(obj: Man | Box) {
  if ("name" in obj) {
    return console.log(obj.name);
  }

  console.log(obj.title);
}

function isMan(obj: Man | Box): obj is Man {
  return "name" in obj;
}

function print2(obj: Man | Box) {
  if (isMan(obj)) {
    return console.log(obj.name);
  }

  console.log(obj.title);
}

const PRIORITIES = ["High", "Medium", "Low"] as const;

type Prio = (typeof PRIORITIES)[number];

function isPriority(description: string): description is Prio {
  return PRIORITIES.includes(description as Prio);
}

function checkDesc(box: Box) {
  if (isPriority(box.title)) {
    return box.title.toUpperCase();
  }
  return box.title;
}
