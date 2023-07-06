import React, { Fragment } from "react";

import MealItem from "./MealItems";
import Description from "./Description";


const Meals = (props) => {
    return (<Fragment>
         <Description />
        <MealItem />
    </Fragment>);
};

export default Meals;