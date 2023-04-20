// Importing the useState hook from the React library
import { useState } from "react";

// Defining an interface for the props that the ListGroup component expects
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // onSelectItem prop is a function that takes a string as argument and doesn't return anything
}

// Defining the ListGroup component as a functional component that receives the Props as its argument
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Initializing state using the useState hook. selectedIndex is the state variable, and setSelectedIndex is the function to update it
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // The main JSX code that returns the UI
  return (
    <>
      {/* Rendering the heading */}
      <h1>{heading}</h1>

      {/* Rendering a paragraph if there are no items */}
      {items.length === 0 && <p>No items found</p>}

      {/* Rendering an unordered list with class name 'list-group' */}
      <ul className="list-group">
        {/* Mapping over the items array and rendering a list item for each item */}
        {items.map((item, index) => (
          <li
            // Setting class name based on whether the item is selected or not
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // Setting the key attribute to the item itself
            key={item}
            // Handling the click event on each list item. Calls the onSelectItem function with the current item as argument and sets the selectedIndex state to the current index
            onClick={() => {
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

// Exporting the ListGroup component as the default export of the module
export default ListGroup;
