import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import app from '../firebase.init';


const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})


    // useEffect(() => {

    // }, [])

    const signInWithGoogle = () => {
        // console.log('singing in soon');
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })

    }

    // return [user, setUser];
    return {
        user,
        signInWithGoogle
    };
}

export default useFirebase;