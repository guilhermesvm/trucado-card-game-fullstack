    import axios from 'axios';
    import React, { useEffect, useState } from 'react';
    import UserCard from './components/UserCard';
    import { Spinner } from 'react-bootstrap';

    export default function Users() {
        const [userList, setUserList] = useState([])
        const [loading, setLoading] = useState(true)

        const searchAxios = () => {
            const url = "http://localhost:3001/api/users   "
            
            axios.get(url).then(function (response) {
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
                    <Spinner></Spinner>
                    :
                    userList.map((user) => {
                        return <UserCard key={user} user={user}></UserCard>
                    })
                }
            </>
        )
    };