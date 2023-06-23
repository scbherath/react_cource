import React from 'react';

const Button = ({type, children}) => {
    return (
        <button className={`btn btn-${type}`} >
            {children}
        </button>
    );
}

export default Button;