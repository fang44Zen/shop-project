import { useState } from "react";
import { createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';

const defaultFormFields = {
    
    email: '',
    password:'',
    
}

const SignIn = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormField = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSunmit = async (event) =>{
        event.preventDefault();
       
        try{
            
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
            <h2>Already have an account?</h2>
            <span>Sign in with you email and password</span>
            <form onSubmit={handleSunmit}>
                
                <FormInput label='Email' required type="email" onChange={handleChange}  name='email' value={email}/>
                <FormInput label="Password" required type="password" onChange={handleChange}  name='password'  value={password}/>
                <Button type='submit'>Sign In</Button>
            </form>
        </div>
       
    );
};

export default SignIn;