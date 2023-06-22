import React from 'react'

const TextInput = ({type, label, placeHolder}) => {
    return (        
        <div className='form-group'>
            {label && (<label>{label}</label>)}
            <input type={type} className='form-control' placeHolder={placeHolder} />
        </div>         
    )
}

export default TextInput;