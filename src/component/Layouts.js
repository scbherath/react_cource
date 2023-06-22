import React from 'react'

const Layouts = ({children}) => {
    return (        
        <div className='container'>               
            <div className='row'>
                <div className='col-md-6'>                
                    {children}
                </div>
            </div>
        </div>        
    )
}

export default Layouts;

