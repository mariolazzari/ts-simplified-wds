import {
  useReducer,
  useEffect,
  CSSProperties,
  createContext,
  useState,
} from "react";
import Button from "./Button";
import Child from "./Child";
import Input from "./Input";
import List from "./List";

// useReducer
type State = {
  count: number;
};

type ActionIncrement = {
  type: "INCREMENT";
  increment: number;
};

type ActionDecrement = {
  type: "DECREMENT";
  decrement: number;
};

type Action = ActionIncrement | ActionDecrement;

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.increment };

    case "DECREMENT":
      return { ...state, count: state.count - action.decrement };

    default:
      return state;
  }
}

// useContext
type User = {
  id: string;
  name: string;
  age: number;
};

export const Context = createContext({ users: [] });

function getUsers() {
  return Promise.resolve([
    { id: crypto.randomUUID(), name: "Mario", age: 48 },
    { id: crypto.randomUUID(), name: "Mariarosa", age: 47 },
  ]);
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [users, setUsers] = useState<User[]>([]);

  const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  };

  const buttonsStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div style={rootStyle}>
      <Context.Provider value={{ users: [] }}>
        <Child>Users</Child>
      </Context.Provider>

      <div style={buttonsStyle}>
        <Button onClick={() => dispatch({ type: "INCREMENT", increment: 1 })}>
          +
        </Button>
        <h2>{state.count}</h2>

        <Button
          onClick={() => dispatch({ type: "DECREMENT", decrement: 1 })}
          outline
        >
          -
        </Button>

        <Button disabled>Disabled</Button>
      </div>
      <Input />
      <List<User>
        items={users}
        getKey={user => user.id}
        renderItem={user => user.name}
      />
    </div>
  );
}

export default App;
