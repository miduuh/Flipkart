import React, { useEffect, useRef } from "react";
import "./ProductSection.css";

const ProductSection = ({ rating = 5, totalStars = 5 }) => {
  const canvasRef = useRef(null);

  const drawStar = (
    ctx,
    cx,
    cy,
    spikes,
    outerRadius,
    innerRadius,
    fillStyle
  ) => {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }

    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < totalStars; i++) {
      const x = 25 + i * 55;
      const y = 60;

      if (i < Math.floor(rating)) {
        drawStar(ctx, x, y, 5, 28, 14, "#008c00");
      } else if (i < rating) {
        drawStar(ctx, x, y, 5, 20, 10, "rgba(220, 220, 220, 1)");
        ctx.save();
        ctx.beginPath();
        ctx.rect(x - 24, y - 24, 24,48);
        ctx.clip();
        drawStar(ctx, x, y, 5, 20,10, "#008c00");
        ctx.restore();
      } else {
        drawStar(ctx, x, y, 5, 20, 10, "rgba(220, 220, 220, 1)");
      }
    }
  }, [rating, totalStars]);

  return (
    <div>
      <div className="headset-div">
        <div className="headset1">
          <div className="headset-img">
            <img src="/src/assets/headset/triggr-green.jpeg" alt="" />
          </div>
          <div className="product-description">
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
            <div className="rate-section">
              <div className="rating">
                <div className="canvas">
                  <canvas style={{width:"120px", height:"40px"}} ref={canvasRef}></canvas>
                </div>
              </div>
              <div className="f-assured">
                <img src="/src/assets/headset/f-assured.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div style={{width:"1px", backgroundColor:"rgb(234,234,234)"}}></div>
        <div className="headset1">
          <div className="headset-img">
            <img src="/src/assets/headset/triggr-green.jpeg" alt="" />
          </div>
          <div className="product-description">
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
            <div className="rate-section">
                <div className="canvas">
                  <canvas style={{width:"90px", height:"40px"}} ref={canvasRef}></canvas>
              </div>
              <div className="f-assured">
                <img src="/src/assets/headset/f-assured.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
