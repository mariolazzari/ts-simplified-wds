// Async
function wait(duration: number): Promise<string> {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve("hi"), duration);
  });
}

wait(1000).then(res => console.log(res.length));

async function fetchUser() {
  return await fetch("https://jsonplaceholder.typicode.com/users");
}

fetchUser().then(res => res.json());
