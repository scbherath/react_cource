import React from 'react';

import Buttons from './Buttons';
const UserListItem = ({ name, email, mobile, age }) => {
    return (
        <li className="list-group-item">
            <div>
                <h5>{name}</h5>
                <p>Email: {email}</p>
                <p>Mobile: {mobile}</p>
                <span>Age: {age}</span>
                <Buttons type="danger" size="sm">Remove</Buttons>
            </div>
        </li>
    )
};

export default UserListItem;