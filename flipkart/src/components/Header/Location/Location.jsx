import React from "react";
import "./Location.css";

const Location = ({ isVisible, HandleClick }) => {
  return (
    <div
      className="locationMenu"
      style={isVisible ? { visibility: "visible" } : { visibility: "hidden" }}
      onClick={HandleClick}
    >
      <div className="blck-bg" style={{ opacity: 1 }}></div>
      <div className="loc-menu">
        <div className="loc-head">
          <div className="prof-logo">
            <img
              className="logoP"
              src="src/assets/location/profile_blue-logo.png"
              alt=""
            />
          </div>
          <div className="loc-txt">Login to see saved addresses</div>
        </div>
        <div className="line"></div>
        <div>
          <div className="pin-txt">Use pincode to check delivery info</div>
          <div className="pinBox">
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter pincode"
              maxLength={6}
              className="pincode"
            />
            <div className="sub-btn">
              <div className="submit">Submit</div>
            </div>
          </div>
        </div>
        <div className="loc-foot">
          <div className="prof-logo">
            <img
              className="logoP"
              src="src/assets/location/location.png"
              alt=""
            />
          </div>
          <div className="loc-txt">Use my current location</div>
        </div>
      </div>
    </div>
  );
};

export default Location;
