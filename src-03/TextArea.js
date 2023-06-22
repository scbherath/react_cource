import React from 'react'

const TextArea = ({label, rows, cols, placeHolder}) => {
    return (        
        <div className='form-group'>
            {label && (<label>{label}</label>)}
            <textarea className='form-control' rows={rows} cols={cols} placeHolder={placeHolder}  />
        </div>         
    )
}

export default TextArea;