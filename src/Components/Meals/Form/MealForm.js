import React from "react";

import Input from "../../UI's/Input";
import classes from './MealForm.module.css';

const MealForm = (props) => {
    return(
        <form className={classes.form}>
            <Input
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
        </form>
    );
};

export default MealForm;