import Button from "./Button";
import Child from "./Child";

function App() {
  return (
    <>
      <Child>Mario</Child>
      <Button>Normal</Button>
      <Button outline>Outline</Button>
      <Button disabled>Disabled</Button>
    </>
  );
}

export default App;
