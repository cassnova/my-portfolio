import React from "react";
import { FiSun, BsMoon } from 'react-icons/ai';
import './Btn.css'

function Btn({ type = "button", className, onClick, children }) {
    return (
        <div className={`btn ${className}`} type={type} onClick={onClick}>
            {children}
        </div>
    )
}

export default Btn;