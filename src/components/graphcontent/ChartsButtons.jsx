import React, { useState, useEffect } from 'react';
import './graphcontent.css'
import Graphcontent from './Graphcontent';

const ChartsButtons = () => {
     const [type,setType]=useState(0);
     const handleClick=(e)=>{
       setType(e.target.value);
     }
    return (
        
     <>
 
       <div className="button-container">
            <button className="row-mmMarkets-button active" value={0} onClick={(e) => handleClick(e)}>FOREX</button>
            <button className="row-mmMarkets-button" value={1} onClick={(e) => handleClick(e)}>VIOP</button>
            <button className="row-mmMarkets-button" value={2} onClick={(e) => handleClick(e)}>BORSA</button>
            <button className="row-mmMarkets-button" value={3} onClick={(e) => handleClick(e)}>KRİPTO</button>
        </div>
      <Graphcontent type={type}/>
      </>
      
    )
}

export default ChartsButtons