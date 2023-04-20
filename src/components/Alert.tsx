import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

// Declaring a functional component named 'Alert'
const Alert = ({ children, onClose }: Props) => {
  return (
    // JSX for an alert with a close button
    <div className="alert alert-warning alert-dismissable">
      {/* Displaying the children passed to the component */}
      {children}
      {/* Creating a close button that calls the onClose function passed to the component when clicked */}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      />
    </div>
  );
};

// Exporting the Alert component
export default Alert;
