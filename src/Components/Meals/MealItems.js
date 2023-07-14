import React from "react";

import classes from './MealItems.module.css';
import Card from "../UI's/Card";
import AvailableMeals from "./Form/AvailableMeals";
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
    const meallist = DUMMY_MEALS.map((meal) => (
      <AvailableMeals
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description = {meal.description}
      price = {meal.price}
      />
    ));    

      return ( <section className={classes.meals}>
        <Card>
        <ul>
            {meallist}
        </ul>
      </Card>
      </section>);

};

export default MealItem;