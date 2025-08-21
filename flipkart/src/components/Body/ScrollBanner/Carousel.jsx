import React, { useEffect, useState } from "react";
import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => setSlide( slide >= data.length-1 ? 0 : slide + 1 );
  const prevSlide = () => setSlide((slide - 1 + data.length) % data.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [slide]);
  const slidePercent = slide * 100

  return (
    <div className="ccc">
      <div className="cImage-scroll">
        <a className="cImages"
        
        >
          {data.map((item, index) => {
            return (
              <>
                <img
                  src={item.src}
                  alt={item.alt}
                  key={index}
                  className={
                    "cImage0 "
                  }
                  style={{transform:`translateX(-${slidePercent}%)`,transition:"transform .3s ease-in-out" }}
                />

              </>
            );
          })}
        </a>
      </div>

      <span className="indicators">
        {data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};
