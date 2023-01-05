import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



function User({userInfo}) {
    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                <tr>
                    <td>name: {userInfo.name}</td>
                    <td>email: {userInfo.username}</td>
                    <td>email: {userInfo.email}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default User;