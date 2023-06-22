import React from 'react';

const FormHeader = (props) => {
    return (
        <div>             
            <div className='form-control'> 
                <div class="form-group">                           
                    <h2>{props.title}</h2>   
                </div>                      
            </div>        
        </div>
    )
}; 

export default FormHeader;