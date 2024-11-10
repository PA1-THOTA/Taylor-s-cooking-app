import React from 'react';
import MealCard from './MealCard';
import { Link } from 'react-router-dom';

// mealList Component to display the items in the meals array in responsive manner
function MealList({ meals }) {
  return (
    <div className="meal-list">
      {meals.length > 0 ? (
        meals.map(meal => (
          // creating the dynamic links for each meal based on the idMeal of the array
          <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
                <MealCard meal={meal} />
          </Link>        
        ))
      ) : (
        // showing message no meals are found as per user input
        <p style={{fontSize:"30px"}}>&#128531; No meals to show</p>
      )}
    </div>
  );
}

export default MealList;
