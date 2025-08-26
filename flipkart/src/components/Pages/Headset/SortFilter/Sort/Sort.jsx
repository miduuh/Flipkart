import React, { createContext, useState } from "react";
import "./Sort.css";
import { useSort } from "../../Sort&Map-context/SortContext";

const Sort = ({ isVisible, handleClick }) => {
  if (isVisible == true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  const {setSortType} = useSort()

  
//   return sortedData
  return (
    <div
      style={isVisible ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <div className="bg-black" onClick={handleClick}></div>
      <div className="classify">
        <div className="sort-by">SORT BY</div>
        <div className="sort-ul"></div>
        <div>
          <div className="classification" onClick={setSortType("popularity")}>
            <div className="popularity">Popularity</div>
            <div className="radio-button">
              <img src="src/assets/headset/radio-button.png" alt="" />
            </div>
          </div>
          <div className="classification" onClick={setSortType("lowToHigh")}>
            <div className="popularity">Price -- Low to High</div>
            <div className="radio-button">
              <img src="src/assets/headset/radio-button-unchecked.png" alt="" />
            </div>
          </div>
          <div className="classification" onClick={setSortType("highToLow")}>
            <div className="popularity">Price -- High to Low</div>
            <div className="radio-button">
              <img src="src/assets/headset/radio-button-unchecked.png" alt="" />
            </div>
          </div>
          <div className="classification" onClick={setSortType("newest")}>
            <div className="popularity">Newest First</div>
            <div className="radio-button">
              <img src="src/assets/headset/radio-button-unchecked.png" alt="" /> 
            </div>
          </div>
          <div className="classification" onClick={setSortType("discount")}>
            <div className="popularity">Discount</div>
            <div className="radio-button">
              <img src="src/assets/headset/radio-button-unchecked.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default Sort;
