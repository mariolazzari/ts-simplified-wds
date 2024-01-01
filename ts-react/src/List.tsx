import { Key, ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  getKey: (item: T) => Key;
  renderItem: (Item: T) => ReactNode;
};

function List<T>({ items, getKey, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default List;
