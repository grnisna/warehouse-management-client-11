import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Login/firebase/firebase.init';
import './SocialMedia.css';
import {  useLocation, useNavigate } from 'react-router-dom';

const SocialMedia = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if(user || user1){
        navigate(from, {replace:true});
    }
    return (
        <div>
            <div className='or-section' >
                <div className='border w-100' ></div>
                <div className='mt-3 mx-3' ><p>OR</p></div>
                <div className='border w-100'></div>
            </div>
            <div className='mediaSection'>
                {
                    error&& <p> <span style={{color:'red'}} >{error.message}</span> </p>
                }
                {
                    error1&& <p> <span style={{color:'red'}} >{error1.message}</span> </p>
                }
                    <button onClick={()=>signInWithGoogle()}  className='btn btn-secondary w-100 mt-2' >Sing in by Google</button>
                    <button onClick={()=>signInWithGithub()} className='btn btn-secondary w-100 mt-2' >Sing in by Github</button>
                    <button className='btn btn-secondary w-100 mt-2' >Sing in by Facebook</button>
            </div>
        </div>
    );
};

export default SocialMedia;