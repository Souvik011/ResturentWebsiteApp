import React, { Fragment } from "react";

import classes from './MealItems.module.css';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const MealItem = (props) => {
    const meallist = DUMMY_MEALS.map((item) => (
        <li className={classes.meal}>
        <div>
            <h3>
                {item.name}
            </h3>
            <div className={classes.description}>
                {item.description}
            </div>
            <div className={classes.price}>
                ${item.price}
            </div>
        </div>
    </li>
    ));    

      return (<Fragment>
        <ul>
            {meallist}
        </ul>
      </Fragment>);

};

export default MealItem;