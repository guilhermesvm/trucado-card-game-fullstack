import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import { Spinner } from 'react-bootstrap';
import userService from './services/userService';

export default function Users() {
    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(true)

    const searchAxios = async () => {
        const users = await userService.getUsers();
        setUserList(users);
        setLoading(false);
    }

    useEffect(() => {
        searchAxios();
    }, [])

    return (
        <> 
            {  
                loading ?
                <Spinner animation="border"></Spinner>
                :
                userList.map((user) => {
                    return <UserCard key={user} user={user}></UserCard>
                })
            }
        </>
    )
};