import React from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './CartButton.module.css';

const CartButton = (props) => {
    return (<React.Fragment>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon} ><CartIcon /></span>
            <span>Cart Items</span>
            <span className={classes.badge}>0</span>
        </button>
    </React.Fragment>)
};

export default CartButton;