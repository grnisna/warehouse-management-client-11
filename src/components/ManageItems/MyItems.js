
import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Login/Login/firebase/firebase.init';
import './Myitems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);

    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const myAllItems = async () => {
            const email = user.email;
            const url = `https://immense-brushlands-19382.herokuapp.com/manage?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setMyItems(data);
            }
            catch (error) {

                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                }
            }

        }
        myAllItems();


    }, [user.email])
    return (
        <div>
            <h3 className='text-center text-info p-3 my-3' >My Item page {myItems.length} </h3>

            <div className='table-area shadow p-4' >

                <Table striped bordered hover  responsive="sm">
                    <thead>
                        <tr>
                            <th>sl.no</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Quantity</th>
                            <th>Supplier</th>
                        </tr>
                    </thead>
                    {myItems.map(item => <tbody key={item._id}>
                        <tr>
                            <td>{item._id} </td>
                            <td>{item.name} </td>
                            <td>{item.color} </td>
                            <td>{item.quantity} </td>
                            <td>{item.supplier} </td>
                        </tr>
                    </tbody>)}

                </Table>

            </div>

        </div>
    );
};

export default MyItems;