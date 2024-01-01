import { User } from "./intersections";
import { addDays } from "date-fns";
import { times } from "lodash";

addDays(new Date(), 3);
times(0);

function printName(user: User) {
  console.log(user.name);
}

const me: User = {
  name: "Mario",
  age: 48,
};

printName(me);
