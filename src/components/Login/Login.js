import React from 'react';

const Login = () => {
    return (
        <div>
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