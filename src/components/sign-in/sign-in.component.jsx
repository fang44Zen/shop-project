import { signInWithGooglePopup, creatUserDocumentFromAuth, singInWithGoogleRedirect, auth } from '../../utils/firebase/firebase.utils'
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUp from '../sing-up/sing-up.component';



const SignIn = () =>{

    useEffect(()=>{
        getRedirectResult( async() =>{
            const response = await getRedirectResult(auth);
            if(response){
                const userDocRef = await creatUserDocumentFromAuth(response.user)
            }
        });
    }, []);


    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUp />
        </div>
    )
}

export default SignIn;