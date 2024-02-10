import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import "./navbar.scss";
import carLogo from "../../assets/images/logo/car.png";
import { BiSolidMessageDetail, BiSolidUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import * as constant from "@src/configs/constant";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedInStatus = useSelector(state => state.auth.loggedInStatus, () => {
  });

  const handlePost = () => {
    if (loggedInStatus) {
      navigate("/post-ad");
    } else {
      navigate("/login-user");
    }
  };

  return (
    <div className="position-fixed top-0" style={{ zIndex: "2" }}>

      <Row>
        <Col lg="12">

          <div className="navbar-bg">
            <Row className="inner-row">
              <Col className="p-0 d-flex align-items-center" lg="6">
                <img className="car-logo" src={carLogo} alt="car logo" />
                <Link to="/home">
                  <h3 className="text-white m-0">VEHICLE.LK</h3>
                </Link>
                <small className="text-white ms-4 fw-bolder">All Ads</small>
              </Col>
              <Col lg="6" className="d-flex align-items-center justify-content-end p-0">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="">
                    <BiSolidMessageDetail size={20} color={"white"} />
                    <small className="text-white cursor-pointer"
                           style={{ marginLeft: "10px", marginRight: "25px" }}>Chat</small>
                  </div>
                  <div>
                    <BiSolidUser size={20} color={"white"} />
                    <Link to="/login-user">
                      <small className="text-white cursor-pointer"
                             style={{ marginLeft: "10px", marginRight: "25px" }}>{
                        loggedInStatus ? Cookies.get(constant.USER_NAME) : "Log In"
                      }</small>
                    </Link>
                  </div>
                  {/*<Link to="/post-ad">*/}
                  <Button className="btn-post fw-bolder" color="#FFC800" onClick={handlePost}
                          style={{ color: "black", background: "#FFC800" }}>POST YOUR AD</Button>
                  {/*</Link>*/}
                </div>

              </Col>
            </Row>
          </div>

        </Col>
      </Row>

    </div>
  );
};

export default Navbar;