import React, { useEffect, useState } from "react";
import "./ProductSection.css";
import DrawStar from "./DrawStar";
import { useSort } from "../Sort&Map-context/SortContext";

const ProductSection = () => {
  const { product } = useSort();

  return (
    <div>
      <div className="headset-div">
        {product?.length > 0 &&
          product?.map((item, index) => {
            return (
              <div className="headset1" key={index}>
                <div className="headset-img">
                  <img src={item.src} alt="" />
                </div>
                <div className="product-description">
                  <div className="sponsored">
                    {item.isSponsored ? "Sponsored" : ""}
                  </div>
                  <div className="headset-name">{item.brand}</div>
                  <div className="headset-description">{item.description}</div>
                  <div className="prices">
                    <div className="discount-percentage">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z"
                          fill="#008C00"
                        ></path>
                      </svg>
                      <div>{item.discountPercentage}%</div>
                    </div>
                    <div className="actual-price">₹{item.actualPrice}</div>
                    <div>₹{item.discountPrice}</div>
                  </div>
                  <div className="wow-offer">
                    <div className="wow">
                      <img src="src/assets/headset/wow.png" alt="" />
                    </div>
                    <div style={{ marginInline: "2px" }}>₹{item.bankOffer}</div>
                    <div style={{ fontFamily: "var(--robo-reg)" }}>
                      with Bank offer
                    </div>
                  </div>
                  <div className="rate-section">
                    <DrawStar rating={item.rating} />

                    <div className="f-assured">
                      <img src="/src/assets/headset/f-assured.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div
          style={{ width: "1px", backgroundColor: "rgb(234,234,234)" }}
        ></div>
      </div>
    </div>
  );
};

export default ProductSection;
