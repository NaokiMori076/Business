import { Carousel } from "antd";
import React from "react";

export default function Slider() {
  return (
    <div className="slider">
      <Carousel slidesPerRow={3}>
        <div className="item">
          <h3>1</h3>
        </div>
        <div className="item">
          <h3>2</h3>
        </div>
        <div className="item">
          <h3>3</h3>
        </div>
        <div className="item">
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
