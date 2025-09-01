import React from "react";
import "./Filters.css";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
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
          <div className="options-div">
            <div className="options">Brand</div>
          </div>
          <div className="options-div">
            <div className="options">Connectivity</div>
          </div>
          <div className="options-div">
            <div className="options">Color</div>
          </div>
          <div className="options-div">
            <div className="options">Price</div>
          </div>
          <div className="options-div">
            <div className="options">Discount</div>
          </div>
          <div className="options-div">
            <div className="options">Features</div>
          </div>
          <div className="options-div">
            <div className="options">Headphone Type</div>
          </div>
          <div className="options-div">
            <div className="options">Customer Ratings</div>
          </div>
          <div className="options-div">
            <div className="options">Headphone Design</div>
          </div>
          <div className="options-div">
            <div className="options">F-Assured</div>
          </div>
          <div className="options-div">
            <div className="options">Compatible With</div>
          </div>
          <div className="options-div">
            <div className="options">Offers</div>
          </div>
          <div className="options-div">
            <div className="options">New Arrivals</div>
          </div>
          <div className="options-div">
            <div className="options">Availability</div>
          </div>
          <div className="options-div">
            <div className="options">GST Invoice Available</div>
          </div>
          <div className="options-div">
            <div className="options">Category</div>
          </div>
        </div>

        <div className="category-options">
          <div>
            <div className="ctgry-optn">
              <img className="unchecked" src="/src/assets/headset/unchecked.png" alt="" />
              <div>Bluetooth</div>
            </div>
            <div className="ctgry-optn">
              <img className="unchecked" src="/src/assets/headset/unchecked.png" alt="" />
              <div>Bluetooth & Wired</div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Filters;
