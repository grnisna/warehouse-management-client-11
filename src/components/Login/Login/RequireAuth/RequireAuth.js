import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import auth from '../firebase/firebase.init';

const RequireAuth = ({ children }) => {

    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div className='p-5' >

            <h1 className='text-center text-primary'  >Your Email hasn't varified. Checked your Email</h1>
            <div className='text-center p-5' >
                <div>
                    <p>Access to Update item need to varified your Email</p>

                </div>
                <div>
                    <p>Cause, It is very Sensitive Route.</p>
                </div>
                <div>
                    <p>No gain varification message. No worry, press the <strong> <span style={{ color: 'blue' }} >Again varified </span></strong> Button</p>
                </div>
            </div>
            <div className='text-center' >
                <button className=' w-25 btn btn-primary'>Again Varified </button>
            </div>

        </div>
    }
    return children;
};

export default RequireAuth;