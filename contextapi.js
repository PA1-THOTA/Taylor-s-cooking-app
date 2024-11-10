import React, { useState } from "react";
// creating context to manage state globally
export const context=React.createContext()
// creating context provider to wrap the app component, so as to make the state, available globally
export const ContextProvider=({children})=>{
    const [meals,setMeals]=useState([])
    // passing the meals variable to context, so  that it will be available for whole react component
    return <context.Provider value={[meals,setMeals]}>{children}</context.Provider>
}

