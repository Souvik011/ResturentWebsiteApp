import React, { Fragment,useContext } from "react";
import classes from './AvailableMeals.module.css';
import MealForm from "./MealForm";
import CartContext from "../../../store/Cart-context";



const AvailableMeals = (props) => {

    const CartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = (amount) => {
        CartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return(<Fragment>
        <li className={classes.meal}>
        <div>
            <h3>
                {props.name}
            </h3>
            <div className={classes.description}>
                {props.description}
            </div>
            <div className={classes.price}>
                {price}
            </div>
        </div>
        <div>
            <MealForm onAddToCart={addToCartHandler} />
        </div>
    </li>

    </Fragment>);
};

export default AvailableMeals;