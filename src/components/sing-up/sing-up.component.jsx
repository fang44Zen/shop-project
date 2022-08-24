import { useState } from "react";
import { createAuthUserWithEmailAndPassword, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
        if (password != confirmPassword){
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
        <div>
            <h1>Sign up with you email and password</h1>
            <form onSubmit={handleSunmit}>
                <label>Dispalay name</label>
                <input required type='text' onChange={handleChange} name='displayName' value={displayName}/>

                <label>Email</label>    
                <input required type="email" onChange={handleChange}  name='email' value={email}/>

                <label>Password</label>
                <input required type="password" onChange={handleChange}  name='password'  value={password}/>

                <label>Confirm Password</label>
                <input required type='password' onChange={handleChange}  name='confirmPassword' value={confirmPassword}/>
                <button type='submit'>Sign up</button>
            </form>
        </div>
       
    );
};

export default SignUp;