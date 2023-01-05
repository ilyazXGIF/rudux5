import React from 'react';
import User from "../../componets/User";
import {useSelector} from "react-redux";

function UsersListPage(props) {

    const {users} = useSelector(state => state.usersReducer)

    return (
        <div>

            <h1>users list</h1>
            {users.map((k)=><li key={k.name}>{k.name}</li>)}

        </div>
    );
}

export default UsersListPage;