import React from 'react';
import AppComp from './AppComp';
import Meal from "./Meal"
// import Routes and Route to make our react application a single page application
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
      // wrap (Route) in Routes. all the (Route) component must be wrapped in Routes component
      <Routes>
          {/* give respective path and its element to view in Route attributes*/}
          <Route path="/" element={<AppComp/>}/>
          {/* getting the routes dynamically when user hits a particular meal */}
          <Route path="/meal/:mealname" element={<Meal/>}/>
      </Routes>
  )
}

export default App;
