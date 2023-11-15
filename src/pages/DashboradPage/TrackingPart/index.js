import React from "react";
import Slider from "./slider";
import "./style.css";
import { Button, Col, Row } from "antd";

export default function TrackingPart() {
  return (
    <div className="track-part">
      <Slider />
      <div className="track-word1 padding-10">
        Velo help you accepts and manages deliveries from anywhere,
        <br /> turning each point to a fast and cheaper delivery
      </div>
      <img
        className="section_img1 padding-10"
        src="assets/img/section_1.png"
        alt=""
      />
      <Row className="track-word2 padding-10">
        <Col className="track-word2-left" md={24} lg={13}>
          Keep the heart of your business rolling with ultimately fast
          deliveries
          <br /> at low cost.
        </Col>
        <Col className="" md={24} lg={1}></Col>
        <Col className="track-word2-right" md={24} lg={10}>
          <div className="right-word">
            Velo delivers lightning-fast, affordable same-day or <br /> next-day
            delivery with multi-pickup locations and live
            <br /> order tracking. Boom!
          </div>
          <Button className="right-btn">Start Now</Button>
        </Col>
      </Row>
    </div>
  );
}
