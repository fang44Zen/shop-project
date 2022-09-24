import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo} from '../../../Assets/crown.svg';
import { UserContext} from '../../../contexts/user.context';
import {signOutUser} from '../../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDopdown from "../../cart-dropdown/cart-dopdown.component";
import { CartContext} from "../../../contexts/cart.context";

const Navigation =() =>{
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async  () =>{
        await signOutHandler();
        setCurrentUser(null);
    }
   
    return(
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                
                <div className='nav-links-container'>
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className="nav-link" onClick={signOutHandler}>Sign Out</span>)
                        : (<Link className="nav-link" to='/auth'>
                        Sign in
                    </Link>)
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDopdown />}
            </div>
            <Outlet />
            
        </Fragment>
    )
}

export default Navigation;


