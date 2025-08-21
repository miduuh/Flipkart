import React from "react";
import "./Headset.css";
import Head from "./Head/Head";
import SortFilter from "./SortFilter/SortFilter";
import Features from "./Features/Features";
import Description from "./Description/Description";
import ProductSection from "./ProductSection/ProductSection";

const Headset = () => {
  return (
    <div>
      <Head/>
      <SortFilter/>
      <Features/>
      <Description/>
      <ProductSection/>
    </div>
  );
};

export default Headset;
