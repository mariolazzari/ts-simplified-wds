type Async = Promise<string>;
type Value = Awaited<Async>;

// nested promise support
type NestedAsync = Promise<Promise<string>>;
type NestedValue = Awaited<NestedAsync>;

// async func
async function asyncFunc() {
  return 3;
}

type FuncValue = Awaited<ReturnType<typeof asyncFunc>>;
