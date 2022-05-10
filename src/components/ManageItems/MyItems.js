import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseItems from '../Hooks/UseItems/UseItems';
import auth from '../Login/Login/firebase/firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);

    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/manage?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyItems(data)
            })
    }, [])
    return (
        <div>
            <h3>My Item page {myItems.length} </h3>
        </div>
    );
};

export default MyItems;