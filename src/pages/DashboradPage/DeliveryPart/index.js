import { Anchor, Button, Col, Row } from "antd";
import React from "react";
import "./style.css";
export default function DeliveryPart() {
  const { Link } = Anchor;

  const onChange = (link) => {
    console.log("Anchor:OnChange", link);
  };
  return (
    <div className="delivery-part padding-10">
      <Row className="first-part">
        <Col md={24} lg={11}>
          <img className="part-left" src="assets/img/section_4.png" alt="" />
        </Col>
        <Col md={24} lg={2}></Col>
        <Col className="part-right" md={24} lg={11}>
          <Anchor affix={false} onChange={onChange}>
            <Link
              href="#title1"
              title={
                <div>
                  <div className="title">Live rates based on location</div>
                  <div className="content">
                    With Velo managing orders made easy! Say goodbye to <br />
                    headaches and hello to streamlined order management
                    <br /> like never before
                  </div>
                </div>
              }
            />
            <Link
              href="#title2"
              title={
                <div>
                  <div className="title2">Pickup from nearest inventory</div>
                  <div className="content"></div>
                </div>
              }
            />
            <Link
              href="#components-anchor-demo-basic"
              title={
                <div>
                  <div className="title2">Live tracking</div>
                  <div className="content"></div>
                </div>
              }
            />
            <Link
              href="#API"
              title={
                <div>
                  <div className="title2">Manage returns and replaces</div>
                  <div className="content"></div>
                </div>
              }
            />
          </Anchor>
        </Col>
      </Row>
      <Row className="second-part padding-10">
        <Col className="part-left" md={24} lg={11}>
          Direct Store Delivery revolutionizes logistics, providing unmatched
          speed, efficiency, and flexibility.
        </Col>
        <Col className="" md={24} lg={2}></Col>
        <Col className="part-right" md={24} lg={11}>
          <div className="right-word">
            Same-day delivery can drive an impressive 11% growth in your website
            sales, improve customer satisfaction, and cut down cart abandonment
            rates.
          </div>
          <Button className="right-btn">Start Now</Button>
        </Col>
      </Row>
    </div>
  );
}
