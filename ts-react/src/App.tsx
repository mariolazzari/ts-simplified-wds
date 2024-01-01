import Button from "./Button";
import Child from "./Child";
import Input from "./Input";

function App() {
  return (
    <>
      <Child>Mario</Child>
      <Button>Normal</Button>
      <Button outline>Outline</Button>
      <Button disabled>Disabled</Button>
      <Input />
    </>
  );
}

export default App;
