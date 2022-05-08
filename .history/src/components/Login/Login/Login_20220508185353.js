import React from 'react';
import auth from './firebase/firebase.init';

const Login = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    return (
        <div>
            <form>
                <input type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;