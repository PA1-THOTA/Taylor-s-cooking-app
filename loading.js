import React from "react"
// creating loading component to view animation at the time of fetching the api
function Loading({ meal }) {
    return (
      <div className="loadingAnime">
        {/* static text to display */}
        <div className="fixed">Loading....</div>
        {/* moving bar from left and right */}
        <div className="mover"></div>
      </div>
    );
  }
  
  export default Loading;