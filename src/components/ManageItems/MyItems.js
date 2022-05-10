
import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Login/Login/firebase/firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);

    const [myItems, setMyItems] = useState([]);
    
    useEffect(() => {
        const myAllItems = async () => {
            const email = user.email;
            const url = `https://immense-brushlands-19382.herokuapp.com/manage?email=${email}`;
            try {
                const {data} = await axios.get(url,{
                    headers:{
                        authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                });
                setMyItems(data);
            }
            catch (error) {
                
                if(error.response.status === 401 || error.response.status === 403){                    
                    signOut(auth);
                }
            }

        }
        myAllItems();


    }, [user.email])
    return (
        <div>
            <h3>My Item page {myItems.length} </h3>
        </div>
    );
};

export default MyItems;