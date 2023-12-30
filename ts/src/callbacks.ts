function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}

type PrintNameFunc = (name: string) => void;

const printNameFunc: PrintNameFunc = name => {
  console.log(name);
};
