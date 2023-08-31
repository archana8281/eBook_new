import React from "react";
import { BANNER } from "../../utlis";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div style={{ margin: "20px 0" }}>
      <Carousel autoPlay={true} showThumbs={false}>
        {BANNER.map((itm) => (
          <div className="banner" key={itm.text}>
            <div className="banner-left">
              <h1>{itm.text}</h1>
              <p>{itm.para}</p>
            </div>
            <div className="banner-rig">
              <img src={itm.img} alt="loading" className="learn-img" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
