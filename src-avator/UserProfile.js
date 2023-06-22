import React from 'react';
import Avator from './Avator';

const UserProfile = ({avator, name, email, status}) => {
    return (        
        <div className='row'>
            <div className='col-sm-4'>
                
                <Avator
                    avator={avator}
                    shape="circle"                                      
                />
                <h2>{name}  </h2>                
                <p>{email}</p>
                <p>{status}</p>                
            </div>      
        </div>         
    )
}



export default UserProfile;