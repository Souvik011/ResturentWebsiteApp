import React,{useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './CartButton.module.css';
import CartContext from "../../store/Cart-context";

const CartButton = (props) => {
    const CartCtx = useContext(CartContext);
    const numberOfCartItems = CartCtx.item.reduce((curNum,item) => {
        return curNum + item.amount;
    }, 0);
    return (<React.Fragment>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon} ><CartIcon /></span>
            <span>Cart Items</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    </React.Fragment>)
};

export default CartButton;