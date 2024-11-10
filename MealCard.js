import React from 'react';

// MealCard component to display items in meals array
function MealCard({ meal }) {
  return (
    <div className="meal-card">
          <div className="imgcont"><img src={meal.strMealThumb} alt={meal.strMeal} /></div>
          <hr style={{color:"black"}}/>
          <h3 className="me">{meal.strMeal}</h3>
    </div>
  );
}

export default MealCard;
