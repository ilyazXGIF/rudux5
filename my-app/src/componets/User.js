import React from 'react';

function User({userInfo}) {
    return (
        <div>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.username}</li>
            <li>email: {userInfo.email}</li>
        </div>
    );
}

export default User;