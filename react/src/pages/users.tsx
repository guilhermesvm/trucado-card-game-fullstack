import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';

export default function Users() {
    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(true)

    const searchAxios = () => {
        const url = "https://jsonplaceholder.typicode.com/users"
        
        axios.get(url)
        .then(function (response) {
            setUserList(response.data)
            setLoading(false)
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        setLoading(true)
        searchAxios();
    }, [])

    return (
        <> 
        {  
            loading ?
            <h1>carregando</h1>
            :
            userList.map((user) => {
                return <UserCard key={user} user={user}></UserCard>
            })
        }
        </>
    )
};