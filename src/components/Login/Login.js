import React from 'react';
import useFirebase from '../../hooks/useFirebase';
const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (

        <div>
            <h3>Please LogIn</h3>
            <button onClick={signInWithGoogle}> signInWithGoogle </button>
            <form action="">
                <input type="text" placeholder='Enter your Name' />
                <br></br>
                <input type="email" placeholder='your E-mail' />
                <br></br>
                <input type='submit' value="Login" />
            </form>
        </div>
    );
};

export default Login;