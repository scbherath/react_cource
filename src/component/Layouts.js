import React from 'react'

const Layouts = ({size, children}) => {
    return (        
        <div className='container'>               
            <div className='row'>
                <div className={`col-md-${size}`}>                
                    {children}
                </div>
            </div>
        </div>        
    )
}

export default Layouts;

