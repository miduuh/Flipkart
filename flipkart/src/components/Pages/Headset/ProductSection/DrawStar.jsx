import React, { useRef, useEffect } from "react";

const DrawStar = (totalStars = 5, rating) => {
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
        drawStar(ctx, x, y, 5, 28, 14, "rgba(220, 220, 220, 1)");
        ctx.save();
        ctx.beginPath();
        ctx.rect(x - 24, y - 24, 24, 48);
        ctx.clip();
        drawStar(ctx, x, y, 5, 28, 14, "#008c00");
        ctx.restore();
      } else {
        drawStar(ctx, x, y, 5, 28, 14, "rgba(220, 220, 220, 1)");
      }
    }
  }, [rating, totalStars]);

  return (
    <div className="rating">
      <div className="canvas">
        <canvas
          style={{ width: "120px", height: "40px" }}
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
};

export default DrawStar;
