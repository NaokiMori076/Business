import { Button, Col, Row } from "antd";
import React from "react";
import "./style.css";

export default function BenefitPart() {
  return (
    <Row className="benefit-part padding-10">
      <Col md={24} lg={11}>
        <img className="part-left" src="assets/img/section_2.png" alt="" />
      </Col>
      <Col md={24} lg={2}></Col>
      <Col className="part-right" md={24} lg={11}>
        <div className="benefit-title">
          Seamless shipping from most optimal location, anytime, and
          <br /> start saving time and money.
        </div>
        <div className="benefit">
          <Button className="benefit-btn">Effortless Oms</Button>
          <div className="benefit-word">
            With Velo managing orders made easy! Say goodbye to headaches and
            hello to streamlined order management like never before
          </div>
        </div>
        <div className="benefit">
          <Button className="benefit-btn">Quick Integration</Button>
          <div className="benefit-word">
            Velo is the ultimate team player, integrating with ALL ecommerce
            platforms. We’re like the cool kid at the party who gets along with
            everyone.
          </div>
        </div>
        <div className="benefit">
          <Button className="benefit-btn">Real-Time Tracking</Button>
          <div className="benefit-word">
            Track your deliveries like a pro with Velo’s real-time delivery
            tracking! Keep your customers informed and their deliveries on time.
            It’s that simple!
          </div>
        </div>
      </Col>
    </Row>
  );
}
