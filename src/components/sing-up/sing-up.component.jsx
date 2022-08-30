import { useState } from "react";
import { createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword: '',
}

const SignUp = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormField = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSunmit = async (event) =>{
        event.preventDefault();
        if (password !== confirmPassword){
            alert("wrong password")
            return;
        }
        try{
            const {user}= await createAuthUserWithEmailAndPassword(email, password);
            await creatUserDocumentFromAuth(user, {displayName});
            resetFormField();
        }catch(error){
           console.error(error);
        }
        
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with you email and password</span>
            <form onSubmit={handleSunmit}>
                
                <FormInput label='Dispalay name' required type='text' onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label='Email' required type="email" onChange={handleChange}  name='email' value={email}/>
                <FormInput label="Password" required type="password" onChange={handleChange}  name='password'  value={password}/>
                <FormInput label="Confirm Password" required type='password' onChange={handleChange}  name='confirmPassword' value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
       
    );
};

export default SignUp;