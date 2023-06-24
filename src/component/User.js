import React from 'react';

const User = ({id, name, email, mobile, age}) => {
     
    return (
        <div key={id} className='row'> 
            <div className='col-md-3'>
                {name}
            </div>
            <div className='col-md-3'>
                {email}            </div>
            
            <div className='col-md-3'>
                {mobile}
            </div>
            <div className='col-md-3'>
                {age}
            </div>
        </div>
    );
}
    
export default User;
