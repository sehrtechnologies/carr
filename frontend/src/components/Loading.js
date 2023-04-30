import React from 'react'
import ReactLoading from "react-loading";
import "../App.css";

const Loading = () => {
  return (
    <div className='loading'>
    
        <ReactLoading 
        type="spinningBubbles"
        color="black"
        height={100}
        width={50}
      />

      
    </div>
  )
}

export default Loading