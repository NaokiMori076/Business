import React from "react";
import Slider from "./slider";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function TrackingPart() {
  return (
    <div className="track-part">
      <Slider />
      <Carousel renderIndicator={false}>
        <div>
          <img src="/assets/img/sample/1.png" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/assets/img/sample/2.png" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/assets/img/sample/3.png" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="/assets/img/sample/3.png" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="/assets/img/sample/3.png" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="/assets/img/sample/3.png" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
