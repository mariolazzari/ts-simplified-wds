// ReturnType & Parameters
function checkLength(a: string, b: number) {
  return a.length < b;
}

type ReturnOfCheckLength = ReturnType<typeof checkLength>;
type ParamsOfCheckLength = Parameters<typeof checkLength>;
type FirstParam = ParamsOfCheckLength[0];

type Func = () => void;
type ReturnFunc = ReturnType<Func>;
type ParamsFunc = Parameters<Func>;
