// Any
let aAny;

aAny = "1";
aAny = 1;
aAny = [];

// Json parse returns any
const jsonParsed = JSON.parse(JSON.stringify("test"));

// Fetch returns any
const resp = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log("Fetched data", data));
