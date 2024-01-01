import { useState, useRef, ChangeEventHandler } from "react";

function Input() {
  const [value, setValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<number>(0);

  valueRef.current += 1;

  const onTextChange: ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value);
  };

  return (
    <input ref={inputRef} type="text" value={value} onChange={onTextChange} />
  );
}

export default Input;
