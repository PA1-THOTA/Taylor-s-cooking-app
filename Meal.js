import React, { useContext } from 'react';
import { context } from './contextapi';
import { useNavigate, useParams } from 'react-router-dom';

// meal component to view , when the user clicked on a particular meal
function Meal() {
    // getting the meals array from usecontext 
    const b=useContext(context)[0];
    // getting the id of the clicked item through useparams
    const a=useParams()
    // getting the meal from the meals array based on the idMeal value of the meal from meals array
     const meal=b.find(each => each.idMeal===a.mealname)
    //  using the useNavigate hool to guide the user to home page
     const navigate=useNavigate()

  return (
    <>
        {/* displaying the meal that was clicked by the user based on the above assignments and functions */}
        <div className="MealContainer">
        <h2>Your Favourite Item Is Here</h2>
        <div className="pavancard">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="pavancard-img"/>
            <div className="pavancard-title">
                <h2>{meal.strMeal}</h2>
            </div>
        </div>
        <div>
            {/* navigating the user to home page by navigate function */}
            <button className='backtohome' onClick={()=>navigate('/')}>Back To Home</button>
        </div>
        </div>
    </>

  );
}




export default Meal;