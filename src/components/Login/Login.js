import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {
    // const { signInWithGoogle } = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (

        <div>
            <h3>Please LogIn</h3>
            {/* <button onClick={signInWithGoogle}> signInWithGoogle </button> */}
            <button onClick={() => signInWithGoogle()}>SignInWithGoogle</button>
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