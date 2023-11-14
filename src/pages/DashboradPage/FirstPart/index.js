import React from "react";
import HeaderMenu from "./headerMenu";
import "./style.css";
import { Button, Col, Rate, Row } from "antd";

const Player = () => {
  return (
    <video
      poster="/assets/img/video_image.png"
      preload="metadata"
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "inherit",
        objectFit: "cover",
      }}
      width="100%"
      height="100%"
      autoPlay
      controls
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    />
  );
};
const authImages = [
  { image: "/assets/img/auth/auth_1.png" },
  { image: "/assets/img/auth/auth_2.png" },
  { image: "/assets/img/auth/auth_3.png" },
];
function FirstPart() {
  return (
    <div className="firstpart">
      <HeaderMenu />
      <Row className="main padding-10">
        <Col className="left-side" lg={24} xl={11}>
          <div className="title">
            Faster, Cheaper, Simpler <br />
            No.1 Delivery Platform{" "}
          </div>
          <div className="intro">
            Experience lightning-fast deliveries, up to 84% savings, and easy
            integration with top <br /> e-commerce platforms. Revolutionize your
            logistics.
          </div>
          <div className="btn-group">
            <Button className="start-btn">Start Now</Button>
            <Button className="see-btn">See Plans</Button>
          </div>
          <div className="rate">
            <Rate disabled value={5} />
            <span className="rate-text">4.9 Average rating</span>
          </div>
          <div className="authorization">
            <p className="auth-text">Authorised reseller</p>
            {authImages.map((item, index) => {
              return (
                <img
                  key={index}
                  className="auth-image"
                  src={item.image}
                  alt=""
                />
              );
            })}
          </div>
        </Col>
        <Col lg={24} xl={3}></Col>
        <Col className="video-side" lg={24} xl={10}>
          <Player />
        </Col>
      </Row>
    </div>
  );
}

export default FirstPart;
