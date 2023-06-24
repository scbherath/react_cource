import React from 'react';
import User from './User';

const UserList = ({users}) => {
    const userListView = users.map((user) => (
        <User key={user.id} {...user}>{user.id}</User>
    ))
    return (userListView);
}

export default UserList;