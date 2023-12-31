type Priority = "High" | "Normal" | "Low";

function checkPrio(prio: Priority) {
  switch (prio) {
    case "High":
      console.log("!!!");
      break;

    case "Normal":
      console.log("!!");
      break;

    case "Low":
      console.log("!");
      break;

    // throws error if new value added to Priority
    default:
      const check: never = prio;
      console.log("never", check);
  }
}
