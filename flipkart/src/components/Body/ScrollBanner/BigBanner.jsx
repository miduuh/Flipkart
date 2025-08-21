import React, { useState, useEffect } from "react";
import "./Carousel.css";

const BigBanner = ({ bdata }) => {
  const [banner, setBanner] = useState(0);

  const nextBanner = () =>
    setBanner(banner >= bdata.length - 1 ? 0 : banner + 1);
  const prevBanner = () =>
    setBanner((banner - 1 + bdata.length) % bdata.length);

  useEffect(() => {
    const timer = setInterval(nextBanner, 3000);
    return () => clearInterval(timer);
  }, [banner]);

  const bannerPercent = banner * 100;

  return (
    <div className="bbb">
      <div className="bImage-scroll">
        <a className="bImages">
          {bdata.map((item, index) => {
            return (
              <>
                <img
                  src={item.src}
                  alt={item.alt}
                  key={index}
                  className={"bImage"}
                  style={{
                    transform: `translateX(-${bannerPercent}%)`,
                    transition: "transform .3s ease-in-out",
                  }}
                />
              </>
            );
          })}
          <button className="arrowleft" onClick={prevBanner}>
            <span className="arrow"></span>
          </button>
          <button className="arrowright" onClick={nextBanner}>
            <span className="arrow right-arw"></span>
          </button>
        </a>
      </div>

      <span className="indicators">
        {bdata.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setBanner(index)}
              className={
                banner === index ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default BigBanner;
