import { useState } from "react";

interface ListGroupProps {
  items: string[];
  header: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getClassNames = (index: number) => {
    if (index === selectedIndex) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  };

  return (
    <>
      <h1>{header}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={getClassNames(index)}
            key={item}
            onClick={(event) => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
