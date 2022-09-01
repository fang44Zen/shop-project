
import SignIn from '../sing-in/sing-in.component';
import SignUp from '../sing-up/sing-up.component';
import './authentification.styles.scss';


const Authentification = () =>{

    return(
        <div className='authentification-container'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentification;