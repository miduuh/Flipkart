import React, { useState } from "react";
import "./SortFilter.css";
import Sort from "./Sort/Sort";

const SortFilter = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div>
      <div className="sort-border">
        <div className="sort-filter">
          <div className="sort" onClick={handleClick}>
            <svg width="20" height="20" viewBox="0 0 256 256">
              <path fill="none" d="M0 0h256v256H0z"></path>
              <path
                fill="none"
                stroke="#111112"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
                d="m144 168 40 40 40-40M184 112v96M48 128h72M48 64h136M48 192h56"
              ></path>
            </svg>
            <div className="sort-txt">Sort</div>
          </div>

          <div className="mid-line"></div>

          <div className="sort">
            <div style={{ position: "relative", marginTop:"5px" }}>
              <svg width="20" height="20" viewBox="0 0 256 256">
                <path fill="none" d="M0 0h256v256H0z"></path>
                <path
                  fill="none"
                  stroke="#111112"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="12"
                  d="M148 172H40M216 172h-28"
                ></path>
                <circle
                  cx="168"
                  cy="172"
                  r="20"
                  fill="none"
                  stroke="#111112"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="12"
                ></circle>
                <path
                  fill="none"
                  stroke="#111112"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="12"
                  d="M84 84H40M216 84h-92"
                ></path>
                <circle
                  cx="104"
                  cy="84"
                  r="20"
                  fill="none"
                  stroke="#111112"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="12"
                ></circle>
              </svg>
              <div className="notify-div">
                <div className="notify-num">3</div>
              </div>
            </div>
            <div className="sort-txt">Filter</div>
          </div>
        </div>
      </div>
      <Sort isVisible={isVisible} handleClick={handleClick}/>
    </div>
  );
};

export default SortFilter;
