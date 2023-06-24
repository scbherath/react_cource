import React from 'react';

import Button from './Button';
const UserListItem = ({ name, email, mobile, age }) => {
    return (
        <li className="list-group-item">
            <div>
                <h5>{name}</h5>
                <p>Email: {email}</p>
                <p>Mobile: {mobile}</p>
                <span>Age: {age}</span>
                <br></br>
                <Button type="danger" size="sm">Remove</Button>
            </div>
        </li>
    )
};

export default UserListItem;