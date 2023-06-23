import React from 'react';

const User = ({id, fname, lname, username}) => {
     
    return (
        <div key={id} className='row'>       
            <div className='col-md-2'>
                {id}
            </div>  
            <div className='col-md-2'>
                {fname}
            </div>
            <div className='col-md-2'>
                {lname}
            </div>
            <div className='col-md-2'>
                {username}
            </div>
        </div>
    );
}
    
export default User;
