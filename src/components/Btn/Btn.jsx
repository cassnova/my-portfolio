import React from "react";
import "./Btn.css";

function Btn({ type = "button", className, onClick, children }) {
  return (
    <div className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </div>
  );
}

export default Btn;
