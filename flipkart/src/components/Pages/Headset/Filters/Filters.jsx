import React, { useState } from "react";
import "./Filters.css";
import { useNavigate } from "react-router-dom";
import SortContext, { useSort } from "../Sort&Map-context/SortContext";

const Filters = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { filter } = useSort();

  const [filterIndex, setFilterIndex] = useState(0);

  return (
    <div>
      <div className="headset-head">
        <div className="back-arrow" onClick={goBack}>
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            ></path>
          </svg>
        </div>
        <div className="filter-head">
          <span style={{ width: "100%" }}>Filters</span>
          <span className="filter-head-txt">Clear Filters</span>
        </div>
      </div>

      <div className="apply-filter">
        <div className="apply-div">
          <div className="count-div">
            <div>3,134</div>
            <div className="filter-count">products found</div>
          </div>
          <div className="apply-button">
            <div className="aply-but">Apply</div>
          </div>
        </div>
      </div>

      <div className="filter-category-options">
        <div className="filter-categories">
          {filter.length > 0 &&
            filter?.map((item, index) => {
              return (
                <div className="options-div" key={index}>
                  <div
                    onClick={() => setFilterIndex(index)}
                    className="options"
                  >
                    {item.mainFilter}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="category-options">
          <div>
            {filter[filterIndex]?.subFilter.map((filt, index) => {
              return (
                <div className="ctgry-optn" key={index}>
                  <img
                    className="unchecked"
                    src="/src/assets/headset/unchecked.png"
                    alt=""
                  />
                  <div>{filt}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
