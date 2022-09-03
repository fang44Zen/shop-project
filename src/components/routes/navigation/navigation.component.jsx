import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo} from '../../../Assets/crown.svg';
import { UserContext} from '../../../contexts/user.context'
import './navigation.styles.scss';

const Navigation =() =>{
    const {currentUser} = useContext(UserContext);
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
                    <Link className="nav-link" to='/auth'>
                        Sign in
                    </Link>
                </div>
            </div>
            <Outlet />
            
        </Fragment>
    )
}

export default Navigation;


