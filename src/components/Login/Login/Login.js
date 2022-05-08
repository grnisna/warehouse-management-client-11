import React from 'react';
import auth from './firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleSignIn = event =>{
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
        createUserWithEmailAndPassword(email,password);
      }
    return (
        <div>
            <form onSubmit={handleSignIn} >
                <input type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;