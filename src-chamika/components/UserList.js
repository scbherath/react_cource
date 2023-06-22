import React from 'react';
//import PropTypes from 'prop-types';

import UserListItem from './UserListItem';
import EmptyMessage from './EmptyMessage';

const UserList = ({ users }) => {
    const renderElement = users.length
        ? users.map((user) => (
            <UserListItem key={user.id} {...user} />
        )) : <EmptyMessage text="Result not found." />
    return (
        <ul className="list-group mt-4">
            {renderElement}
        </ul>
    )
};


export default UserList;