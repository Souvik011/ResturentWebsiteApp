import React,{useRef, useState} from "react";

import Input from "../../UI's/Input";
import classes from './MealForm.module.css';

const MealForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length===0||enteredAmountNumber<1 || enteredAmountNumber>5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
            ref={amountInputRef}
            label="Amount"
            input={{
                id:'amount' + props.id,
                type: 'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }} />
            <button type="submit">Add +</button>
            {!amountIsValid && <p>Please Enter A Valid Amount Number (1-5).</p>}
        </form>
    );
};

export default MealForm;