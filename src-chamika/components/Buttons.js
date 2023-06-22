import React from 'react';

const Buttons = ({ type, size, children }) => {
    return (
        <button
            className={`btn btn-${type} btn-${size}`}>
            {children}
        </button>
    )
};

export default Buttons;