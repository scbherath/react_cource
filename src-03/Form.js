import React from 'react';

const Form = (props) => {
    return (
        <div>             
            <div className='form-control'> 
                <div class="form-group">                           
                    <h1>{props.title}</h1>   
                </div>                      
            </div>        
        </div>
    )
}; 

export default Form;