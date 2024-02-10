import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink, Col, Row, CardImg, Button
} from "reactstrap";
import bgImage from "../assets/images/portrait/newcover.jpg";
import { AlignJustify } from "react-feather";
import AboutUs from "@src/views/AboutUs";
import FeaturedCars from "@src/views/FeaturedCars";
import Navbar from "@src/views/nav/Navbar";
import Home from "@src/views/Home";
import React from "react";

const Main = () => {
  return (
    <>
      <Navbar/>

      <Row style={{background: '#e7edee', paddingRight: '200px', paddingLeft: '200px'}}>
        <Col lg='12'>
          <Home/>
        </Col>
      </Row>

      {/*<Card className="profile-header mb-2">*/}
      {/*  <CardImg src={bgImage} alt="User Profile Image" top />*/}
      {/*  <div className="position-relative" style={{ background: "linear-gradient(to bottom, #1a1a1a, #000000)" }}>*/}
      {/*    <div className="profile-img-container d-flex align-items-center">*/}
      {/*      <div className="profile-img">*/}
      {/*        /!*<img className='rounded img-fluid' src={data.avatar} alt='Card image' />*!/*/}
      {/*      </div>*/}
      {/*      <div className="profile-title ms-3">*/}
      {/*        <h2 className="text-white mt-2">VEHICLE.LK</h2>*/}
      {/*        <p className="text-white">Navigate Your Next Ride with vehicle.lk</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="profile-header-nav">*/}
      {/*  </div>*/}

      {/*  <AboutUs />*/}

      {/*</Card>*/}

      {/*<FeaturedCars />*/}

    </>
  );
};

export default Main;
