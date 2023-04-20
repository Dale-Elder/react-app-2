// Importing necessary components and functions from their respective files
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { Children, useState } from "react";

// Defining the main component of the app
function App() {
  // Initializing state using the useState hook. alertVisable is the state variable, and setAlertVisibility is the function to update it
  const [alertVisable, setAlertVisibility] = useState(false);

  // Defining an array of items
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Defining a function to handle the selection of an item from the list
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // The main JSX code that returns the UI
  return (
    <div>
      {/* Rendering the ListGroup component and passing the items, heading and onSelectItem props */}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {/* Conditionally rendering the Alert component based on the value of alertVisable state variable */}
      {alertVisable && (
        <Alert onClose={() => setAlertVisibility(false)} children="Alerting!" />
      )}

      {/* Rendering the Button component and passing the children, onClick and color props */}
      <Button
        children="Click ME!"
        onClick={() => setAlertVisibility(true)}
        color="danger"
      />
    </div>
  );
}

// Exporting the App component as the default export of the module
export default App;
