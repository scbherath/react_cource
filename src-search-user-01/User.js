import React from 'react';

const User = ({id, name, email, age}) => {
     
    return (           
        <div  className='row'>       
            <div className='col-md-2'>
                {name}
            </div>  
            <div className='col-md-2'>
                {email}
            </div>
            <div className='col-md-2'>
                {age}
            </div>
        </div>
    );
}
    
export default User;
