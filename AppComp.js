import React, { useState,useContext, useEffect } from 'react';
// axios must be imported to fetch the api, its not mandatory we can use javascript fetch function also. 
import axios from 'axios';
import MealList from './MealList';
import Loading from "./loading";
import {context} from './contextapi';



function AppComp() {
  // ingredient variable to store the searching string and setIngredient to set the ingedrient value as required
  const [ingredient, setIngredient] = useState('');
  // meals variable to store the meals fetched from the api and setMeals to set the meals value as required
  // using useContext hook to manage the state in global level
  const [meals, setMeals] = 
  useContext(context)
  // startSearch variable to store true or false, indicating whether the searching is started or not and setSearch to set the startSearch value as required
  const [startSearch,setstartSearch]=useState(true)
  // loading variable to store the loading value and setLoading to set the loading value as required
  const [loading, setLoading] = useState(false);
  // error variable to store error type, if any occured and setError to set the error value as required
  const [error, setError] = useState(null);

  // handleInputChange to make some dom operations when their is a change in input feild
  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const fetchMeal=async ()=>{
    setLoading(true);
    setError(null);
    
    try {
      // using axios to fetch the api
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`);
      const req=response.data.meals
      // setting the meals based on the response
      if (req) {
        // setting the meals as per the searched string
        setMeals(req);
        console.log(req)
      } else {
        setMeals([]);
        setError('No meals found with this ingredient.');
      }
    } 
    // catching the error, if any
    catch (error) {
      setError('***There was an error in fetching the meals.***');
    }
    // making the loading false after api fetching is completed
    setLoading(false);
  }


  useEffect(()=>{
    fetchMeal()},[]
  )

  // fecthMeals function to fetch meals when clicking the search button
  const fetchMeals = async (e) => {
    setstartSearch(false);
    e.preventDefault();
    // making the loading "true" and error "null" when api fetching is started
    setLoading(true);
    setError(null);
    
    try {
      // using axios to fetch the api
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`);
      const req=response.data.meals
      // setting the meals based on the response
      if (req) {
        // settings the required meals based on the inout value. finding the value by converting both strings to lowercase, to remove searching anamolies
        let a =req.filter(each=>{return each.strMeal.toLowerCase().includes(ingredient.toLowerCase())})
        
        console.log(a)
        // setting the meals as per the searched string
        setMeals(a);
      } else {
        setMeals([]);
        setError('No meals found with this ingredient.');
      }
    } 
    // catching the error, if any
    catch (error) {
      setError('***There was an error in fetching the meals.***');
    }
    // making the loading false after api fetching is completed
    setLoading(false);
  };

  // focusing function to shift focus to inputbox
  const focusing=()=>{
    let a=document.getElementById("inp")
    a.focus();
  }

  return (
    <div className="App">
      <h1>Taylor's Cooking Helper</h1>
      {/* providing input feild for entering string for the user */}
      <form onSubmit={fetchMeals}>
        <input id="inp"
          type="text"
          value={ingredient}
          onChange={handleInputChange}
          placeholder="Enter an ingredient"
        />
        {/* button to start searching, when clicked */}
        <button type="submit">Search</button>
      </form>
      {/* to display animation while api is getting fetched */}
      {loading && <Loading/>}
      {/* to display error message when their is no data found or any error occurs */}
      {error && <><h2 style={{color:"red"}}>{error}</h2><h2 style={{color:"#187d00"}} onClick={()=>focusing()}>Try AGAIN</h2></>}
      {<h2>Type your Favourite <span style={{fontSize:"50px"}}>&#128523;</span> meal above</h2>}
      {/* meallist component to display the meals in fetched from the api */}
      {!loading && 
      <MealList meals={meals} />}
    </div>
  );
}

export default AppComp;
