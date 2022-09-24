import "./cart-dopdown.styles.scss";
import Button from "../button/button.component"


const CartDopdown  = () =>{
    return(
        <div className="cart-dropdown-container">
            <div  className="cart-items"/>
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDopdown;