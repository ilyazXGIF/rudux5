import React from 'react';
import User from "../../componets/User";
import {useSelector,useDispatch} from "react-redux";
import {getFetchUsersAction} from "../../redux/actions";
import Button from 'react-bootstrap/Button';


function UsersListPage(props) {
    const dispatch = useDispatch()

    const {users} = useSelector(state => state.usersReducer)
    const getUsersFunc=()=>{
        dispatch(getFetchUsersAction())
    }

    return (
        <div className={"ml-40px"}>

            <h1>users list</h1>
            <Button variant="success" onClick={getUsersFunc}>get users</Button>{' '}
            {users.map(user => <User userInfo={user}/>)}

        </div>
    );
}

export default UsersListPage;