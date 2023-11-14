import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Button } from "antd";

export default function HeaderMenu() {
  return (
    <div className="header-menu padding-10">
      <Row>
        <Col lg={24} xl={12}>
          <div className="right-panel">
            <ul>
              <li className="logo paddingRight-40">
                <NavLink to="/">velo</NavLink>
              </li>
              <li className="paddingRight-40">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="paddingRight-40">
                <NavLink to="/features">Features</NavLink>
              </li>
              <li className="paddingRight-40">
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li className="paddingRight-40">
                <NavLink to="/career">Career</NavLink>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={24} xl={12}>
          <div className="left-panel ">
            <ul>
              <li className="paddingRight-40">
                <NavLink className="login" to="/">
                  Log in
                </NavLink>
              </li>
              <li className="paddingRight-40">
                <Button className="book-demo"> Book A Demo</Button>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
