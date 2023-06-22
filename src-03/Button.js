import React from 'react'

const Button = ({type, label}) => {
    return (        
        <div >
            <button type={type} className="btn btn-success">{label && label}</button>
        </div>         
    )
}

export default Button;