import React from 'react'

const Button = ({type, label, onClick, colorClass}) => {
    return (
        <button type={type} 
        className={`btn ${colorClass}`}
        onClick={onClick}         
        >
            {label}        
        </button>
    )
}

export default Button;