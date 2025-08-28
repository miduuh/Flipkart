import React from "react";
import "./Headset.css";
import Head from "./Head/Head";
import SortFilter from "./SortFilter/SortFilter";
import Features from "./Features/Features";
import Description from "./Description/Description";
import ProductSection from "./ProductSection/ProductSection";
import SortContext from "./Sort&Map-context/SortContext";

const Headset = () => {
  return (
    <div>
      <div className="headset-1023">
        <SortContext>
          <Head/>
          <SortFilter/>
          <Features/>
          <Description/>
          <ProductSection/>
        </SortContext>
      </div>
    </div>
  );
};

export default Headset;
