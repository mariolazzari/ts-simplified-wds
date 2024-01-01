import { ComponentProps } from "react";
// import Child from "./Child";

type ButtonProps = {
  outline?: boolean;
} & ComponentProps<"button">;
//   ComponentProps<typeof Child>; // add all props of Child component;

function Button({ outline = false, ...props }: ButtonProps) {
  return (
    <button
      style={{ border: outline ? "1px solid red" : undefined }}
      {...props}
    ></button>
  );
}

export default Button;
