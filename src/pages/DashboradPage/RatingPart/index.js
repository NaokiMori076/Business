import { Avatar, Col, Row } from "antd";
import React from "react";
import "./style.css";

export default function RatingPart() {
  return (
    <Row className="rate-part padding-10">
      <Col md={24} lg={11}>
        <div className="part-left">
          <div className="content">
            “Through Velo’s deliveries, I discovered the convenience of a new
            pace, where time and convenience danced in harmony.”
          </div>
          <div className="user">
            <Avatar
              className="user-avatar"
              size="large"
              src="assets/img/avatar.jpg"
            ></Avatar>
            <div className="user-name">
              <span className="name">Michael C.</span>
              <span className="job">Mr. Something</span>
            </div>
          </div>
        </div>
      </Col>
      <Col md={24} lg={1}></Col>
      <Col className="part-right" md={24} lg={12}>
        <div className="image">
          <img
            style={{ height: "100%", width: "100%", borderRadius: "20px" }}
            src="assets/img/section_3.png"
            alt=""
          />
        </div>
        <div className="space"></div>
        <div className="content">
          <div className="content-header">
            Velo helped Mr. Something experience a remarkable boost in online
            sales, enhanced delivery reach, and costeffective speed
          </div>
          <div className="content-footer">
            Uses Velo same day, Velo next day and Venti.
          </div>
        </div>
      </Col>
    </Row>
  );
}
