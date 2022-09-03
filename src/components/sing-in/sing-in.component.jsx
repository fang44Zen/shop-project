import { useState, useContext } from "react";
import {  creatUserDocumentFromAuth, 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword, } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {UserContext} from '../../contexts/user.context'
import './sign-in.styles.scss';

const defaultFormFields = {
    
    email: '',
    password:'',
    
}

const SignIn = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const { setCurrentUser } = useContext(UserContext);
    const resetFormField = () =>{
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup();
        await creatUserDocumentFromAuth(user);
    };

    const handleSunmit = async (event) =>{
        event.preventDefault();
       
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormField();
        }catch(error){
            switch(error.code){
                case 'auth/user-not-found':
                    alert('unknow user'); 
                    break
                case 'auth/wrong-password':
                    alert("wrong password");
                    break
                default:
                    console.error(error);
            }
           
        }
        
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with you email and password</span>
            <form onSubmit={handleSunmit}>
                
                <FormInput label='Email' required type="email" onChange={handleChange}  name='email' value={email}/>
                <FormInput label="Password" required type="password" onChange={handleChange}  name='password'  value={password}/>
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>
                </div>
                
            </form>
        </div>
       
    );
};

export default SignIn;