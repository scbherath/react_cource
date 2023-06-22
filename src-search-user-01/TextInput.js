import React from 'react'

const TextInput = ({type, label, placeHolder, onChange}) => {
    return (        
        <div className='form-group'>
            {label && (<label>{label}</label>)}
            <input type={type} className='form-control' placeholder={placeHolder} onChange={onChange} />
        </div>         
    )
}

export default TextInput;