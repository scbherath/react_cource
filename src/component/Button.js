import React from 'react';

const Button = ({type, disabled, children}) => {
    return (
        <button 
            className={`btn btn-${type}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;