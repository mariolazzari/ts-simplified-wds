import type { ReactNode } from "react";

type ChildProps = {
  children?: ReactNode;
};

function Child({ children }: ChildProps) {
  return (
    <div>
      <h1>Ciao {children}</h1>
    </div>
  );
}

export default Child;
