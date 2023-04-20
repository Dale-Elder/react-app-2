// Importing React library
import React from "react";

// Defining an interface for the props that the Button component expects
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning"; // color prop is optional and can only take one of the predefined string values
  onClick: () => void; // onClick prop is a required function that doesn't return anything
}

// Defining the Button component as a functional component that receives the Props as its argument
const Button = ({ children, onClick, color = "primary" }: Props) => {
  // Returning a JSX button element with appropriate class names and the passed children prop
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

// Exporting the Button component as the default export of the module
export default Button;
