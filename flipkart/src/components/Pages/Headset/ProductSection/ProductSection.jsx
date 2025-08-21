import React, { useRef } from "react";
import "./ProductSection.css";

const ProductSection = () => {
    // const canvasRef = useRef(null)

    
  return (
    <div>
      <div>
        <div>
          <div>
            <img src="/src/assets/headset/triggr-green.jpeg" alt="" />
          </div>
          <div>
            <div className="sponsored">Sponsored</div>
            <div className="headset-name">TRIGGR</div>
            <div className="headset-description">
              Kraken X1 with Battery Display, 40ms Latency, Quad Mic ENC, 40 Hr,
              v5.3 Bluetooth Headset 
            </div>
            <div className="prices">
              <div className="discount-percentage">
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z"
                    fill="#008C00"
                  ></path>
                </svg>
                <div>80%</div>
              </div>
              <div className="actual-price">₹3,999</div>
              <div>₹799</div>
            </div>
            <div className="wow-offer">
              <div className="wow">
                <img src="src/assets/headset/wow.png" alt="" />
              </div>
              <div style={{ marginInline: "2px" }}>₹759</div>
              <div style={{ fontFamily: "var(--robo-reg)" }}>
                with Bank offer
              </div>
            </div>
            <div className="rating">
              <div className="canvas-div">
               
                <div className="canvas">
                  <canvas style={{ width: "24px", height: "24px" }}></canvas>
                </div>
                <div className="canvas">
                  <canvas style={{ width: "24px", height: "24px" }}></canvas>
                </div>
                <div className="canvas">
                  <canvas style={{ width: "24px", height: "24px" }}></canvas>
                </div>
                <div className="canvas">
                  <canvas style={{ width: "24px", height: "24px" }}></canvas>
                </div>
                <div className="canvas">
                  <canvas style={{ width: "24px", height: "24px" }}></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
