import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
export function SearchButton({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export function SaveButton({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className="btn-danger btn float-right " >Save
    </button>
  );
}
export function ViewButton({href}) {
  return (
    
    <a href={href}  target="_blank" rel="noopener noreferrer" className="btn btn-success text-right float-right mx-2">
      View
    </a>
  );
}

export function DeleteButton({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default SearchButton