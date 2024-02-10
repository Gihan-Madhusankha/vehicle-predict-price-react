import React, { useEffect, useState } from "react";
import { Badge, Button, CardTitle, Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import bgImage from "../assets/images/logo/coverImage.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { Search } from "react-feather";
import CreatableSelect from "react-select/creatable";
import { MdKeyboardArrowRight } from "react-icons/md";
import SwiperCore, { Autoplay } from "swiper";
// ** Hooks
import { useRTL } from "@hooks/useRTL";
// ** Styles
import "@styles/react/libs/swiper/swiper.scss";
import SwiperAutoplay from "@src/views/swiper/SwiperAutoplay";
// images
import banner from "@src/assets/images/portrait/advertisment.png";
import carImage1 from "@src/assets/images/portrait/product-1-720x480.jpg";
import carImage2 from "@src/assets/images/portrait/product-5-720x480.jpg";

// ** Init Swiper Functions
SwiperCore.use([Autoplay]);


const sortOptions = [
  { value: "1", label: "Date: Newest on top", isFixed: true },
  { value: "2", label: "Date: Oldest on top", isFixed: true },
  { value: "3", label: "Price: High to low", isFixed: true },
  { value: "4", label: "Price: Low to high", isFixed: false }
];

const memberOptions = [
  { value: "1", label: "All", isFixed: true },
  { value: "2", label: "Members", isFixed: true },
  { value: "3", label: "Authorized agent", isFixed: true },
  { value: "4", label: "Non-members", isFixed: false }
];

const Home = () => {

  // ** Hooks
  const [isRtl] = useRTL();

  return (
    <div style={{marginTop: '70px', zIndex: '1'}}>

      <Row>
        <Col className="d-flex justify-content-center" lg="12">
          <img style={{ marginTop: "10px" }} src={bgImage} alt="cover image" />
        </Col>
      </Row>

      <Row className="mt-1" style={{ background: "white" }}>
        <Col lg="3" className="d-flex pt-2 pb-2 border-bottom">
          <FaLocationDot size="20" color="#149777" />
          <h6 className="fw-bolder m-0 ms-1" style={{ color: "#149777" }}>Select Location</h6>
        </Col>
        <Col lg="3" className="d-flex pt-2 pb-2 border-bottom">
          <IoMdPricetag size="20" color="#149777" />
          <h6 className="fw-bolder m-0 ms-1" style={{ color: "#149777" }}>Vehicles</h6>
        </Col>
        <Col className="d-flex align-items-center border-bottom" lg="6">

          <InputGroup className="input-group-merge">
            <Input className="rounded-start-5 p-1" placeholder="What are you looking for?" />
            <InputGroupText className="rounded-end-5 border">
              <Search color="black" size={35} style={{ background: "#ffc800", padding: "5px", borderRadius: "50%" }} />
            </InputGroupText>
          </InputGroup>
        </Col>
      </Row>

      <Row style={{ background: "white" }}>
        <Col lg="3" className="border-end">
          <div className="mt-2 mb-3">
            <small>Sort results by</small>
            <CreatableSelect options={sortOptions} className="react-select mt-1" classNamePrefix="select"
                             defaultValue={sortOptions[0]} />
          </div>
          <div className="mt-2 mb-3">
            <div className="mb-1">
              <small>Filter ads by</small>
            </div>
            <div className="form-check form-check-inline">
              <Input type="checkbox" id="basic-cb-checked" className="me-1" />
              <Badge color="danger" className="badge-glow">
                URGENT
              </Badge>
            </div>
            <div className="form-check form-check-inline mt-1">
              <Input type="checkbox" id="basic-cb-checked" className="me-1" />
              <Badge color="secondary" className="badge-glow">
                FEATURED
              </Badge>
            </div>
          </div>
          <div className="mt-2 border-bottom">
            <small>Type of poster</small>
            <CreatableSelect options={memberOptions} className="react-select mt-1 mb-3" classNamePrefix="select"
                             defaultValue={memberOptions[0]} />
          </div>
          <div className="mt-2">
            <small>Category</small>

          </div>
        </Col>

        <Col lg="7">
          <div className="mt-2">
            <div className="mb-1">
              <small>Home <MdKeyboardArrowRight /> Ads <MdKeyboardArrowRight /> <b>Vehicles</b></small>
            </div>
            <h6 style={{ marginBottom: "10px" }} className="m-0 fw-bolder">New and Used Vehicles for Sale in Sri
              Lanka</h6>
            <small>Showing 1-25 of 60,911 ads</small>
          </div>

          <div>
            <SwiperAutoplay isRtl={isRtl} />
          </div>


          {/*get all ads*/}
          <div className="card mb-1" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={carImage1} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body p-1">
                  <CardTitle className="card-title fw-bolder m-0">Car Name</CardTitle>
                  <p className="card-text m-0"><small className="text-body-secondary">60000 km</small></p>
                  <p className="card-text m-0"><small className="text-body-secondary">Colombo</small></p>
                  <h6 className="fw-bolder" style={{ color: "#009877" }}>LKR 10,000,000</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-1" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={carImage2} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body p-1">
                  <CardTitle className="card-title fw-bolder m-0">Car Name</CardTitle>
                  <p className="card-text m-0"><small className="text-body-secondary">60000 km</small></p>
                  <p className="card-text m-0"><small className="text-body-secondary">Colombo</small></p>
                  <h6 className="fw-bolder" style={{ color: "#009877" }}>LKR 10,000,000</h6>
                </div>
              </div>
            </div>
          </div>

        </Col>

        <Col lg="2" className="p-0">
          <div className=" mt-2">
            <img src={banner} alt="banner ad" />
          </div>
        </Col>
      </Row>


    </div>
  );
};

export default Home;