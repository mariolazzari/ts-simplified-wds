function funcAny(data: any) {
  // no check
  console.log(data.name);
}

function funcUnk(data: unknown) {
  if (
    data &&
    typeof data === "object" &&
    "name" in data &&
    typeof data.name === "string"
  ) {
    console.log(data.name.toLocaleUpperCase());
  }
}
