import React, {useState} from "react";
import "./Description.css";

const Description = () => {
  const [nowrap, setNowrap] = useState(true)
  return (
    <div>
      <div style={{ margin: "10px", whiteSpace: nowrap ? "nowrap" : "normal", overflow: "hidden" }}>
        <span className="span-d">
          <p>
            Check out the Exclusive Launches of
            <a className="a" href="">
              {" "}
              Samsung Galaxy Buds Pro{" "}
            </a>
            active noise cancellation enable bluetooth headset with different
            colors will be available from 28th Jan 2021.
          </p>
          <br />
          {/* </span> */}
          {/* <span className="span-d"> */}
          <p>
            Also check:
            <a href="" className="a">
              {" "}
              Skullcandy Wireless
            </a>
            ,
            <a href="" className="a">
              {" "}
              Skullcandy Smokin Buds 2
            </a>
            ,
            <a href="" className="a">
              {" "}
              JBL Headset
            </a>
            ,
            <a href="" className="a">
              {" "}
              Jabra Headphones
            </a>
            ,
            <a href="" className="a">
              {" "}
              Samsung Level U
            </a>
            ,
            <a href="" className="a">
              {" "}
              Sony Extra Base Headphones
            </a>
          </p>
        </span>
        <span className="span-d">
          <a style={{color:"#2a55e5"}} onClick={() => setNowrap(!nowrap)}>{nowrap ? "Read More" : "See less"}</a>
        </span>
      </div>
    </div>
  );
};

export default Description;
