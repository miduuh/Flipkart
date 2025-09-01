import React, { createContext, useState } from "react";
import "./Sort.css";
import { useSort } from "../../Sort&Map-context/SortContext";

const Sort = ({ isVisible, handleClick }) => {
  if (isVisible == true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  const { sortType, setSortType} = useSort()

  return (
    <div onClick={handleClick}
      style={isVisible ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <div className="bg-black"></div>
      <div className="classify">
        <div className="sort-by">SORT BY</div>
        <div className="sort-ul"></div>
        <div>
          <div className="classification" onClick={()=>setSortType("popularity")}>
            <div className="popularity">Popularity</div>
            <div className="radio-button">
              <img src={ sortType === "popularity" ? "src/assets/headset/selcted.png" : "src/assets/headset/deselected.png"} alt="" />
            </div>
          </div>
          <div className="classification" onClick={()=>setSortType("lowToHigh")}>
            <div className="popularity">Price -- Low to High</div>
            <div className="radio-button">
              <img src={ sortType === "lowToHigh" ? "src/assets/headset/selcted.png" : "src/assets/headset/deselected.png"} alt="" />
            </div>
          </div>
          <div className="classification" onClick={()=>setSortType("highToLow")}>
            <div className="popularity">Price -- High to Low</div>
            <div className="radio-button">
              <img src={ sortType === "highToLow" ? "src/assets/headset/selcted.png" : "src/assets/headset/deselected.png"} alt="" />
            </div>
          </div>
          <div className="classification" onClick={()=>setSortType("newest")}>
            <div className="popularity">Newest First</div>
            <div className="radio-button">
              <img src={ sortType === "newest" ? "src/assets/headset/selcted.png" : "src/assets/headset/deselected.png"} alt="" /> 
            </div>
          </div>
          <div className="classification" onClick={()=>setSortType("discount")}>
            <div className="popularity">Discount</div>
            <div className="radio-button">
              <img src={ sortType === "discount" ? "src/assets/headset/selcted.png" : "src/assets/headset/deselected.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default Sort;
