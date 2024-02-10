import React from "react";
import car1 from "../assets/images/portrait/product-1-720x480.jpg";
import car2 from "../assets/images/portrait/product-2-720x480.jpg";
import car3 from "../assets/images/portrait/product-3-720x480.jpg";
import car4 from "../assets/images/portrait/product-4-720x480.jpg";
import car5 from "../assets/images/portrait/product-5-720x480.jpg";
import car6 from "../assets/images/portrait/product-6-720x480.jpg";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";
import {Link} from 'react-router-dom'

const FeaturedCars = () => {
  return (
    <>
      <div className='mt-3 mb-3 d-flex align-items-center justify-content-center'>
        <Button tag={Link} to='/new-add' color='primary' className='ps-4 pe-4'>POST YOUR ADD</Button>
      </div>
      
      <div className="row">
        <CardTitle className="text-center mt-3">
          <h1 style={{ fontWeight: "bold" }}>Featured Cars</h1>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </CardTitle>
      </div>

      <Row className="match-height mt-2 p-4">
        <Col lg="3" md="6">
          <Card>
            <CardImg top src={car1} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Dacia / Sandero</CardTitle>
              <CardText>
                Well-maintained, single-owner car with low mileage.
              </CardText>
              <CardText>Location : <b>Colombo</b></CardText>
              <CardText>Condition : <b>Used</b></CardText>
              <CardText>Year : <b>2015</b></CardText>

              <div style={{ display: "flex", alignItems: "center" }}>
                <h6 style={{ textDecoration: "line-through", color: "#888", marginRight: "10px" }}>LKR 8500000</h6>
                <h6 style={{ color: "#8FED92", fontWeight: "bold" }}>LKR 8000000</h6>
              </div>

              <Button color="primary" outline className="mt-2">
                view more
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col lg="3" md="6">
          <Card>
            <CardImg top src={car2} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Dacia / Sandero</CardTitle>
              <CardText>
                Well-maintained, single-owner car with low mileage.
              </CardText>
              <CardText>Location : <b>Colombo</b></CardText>
              <CardText>Condition : <b>Used</b></CardText>
              <CardText>Year : <b>2015</b></CardText>

              <div style={{ display: "flex", alignItems: "center" }}>
                <h6 style={{ textDecoration: "line-through", color: "#888", marginRight: "10px" }}>LKR 8500000</h6>
                <h6 style={{ color: "#8FED92", fontWeight: "bold" }}>LKR 8000000</h6>
              </div>

              <Button color="primary" outline className="mt-2">
                view more
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col lg="3" md="6">
          <Card>
            <CardImg top src={car3} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Dacia / Sandero</CardTitle>
              <CardText>
                Well-maintained, single-owner car with low mileage.
              </CardText>
              <CardText>Location : <b>Colombo</b></CardText>
              <CardText>Condition : <b>Used</b></CardText>
              <CardText>Year : <b>2015</b></CardText>

              <div style={{ display: "flex", alignItems: "center" }}>
                <h6 style={{ textDecoration: "line-through", color: "#888", marginRight: "10px" }}>LKR 8500000</h6>
                <h6 style={{ color: "#8FED92", fontWeight: "bold" }}>LKR 8000000</h6>
              </div>

              <Button color="primary" outline className="mt-2">
                view more
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col lg="3" md="6">
          <Card>
            <CardImg top src={car4} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Dacia / Sandero</CardTitle>
              <CardText>
                Well-maintained, single-owner car with low mileage.
              </CardText>
              <CardText>Location : <b>Colombo</b></CardText>
              <CardText>Condition : <b>Used</b></CardText>
              <CardText>Year : <b>2015</b></CardText>

              <div style={{ display: "flex", alignItems: "center" }}>
                <h6 style={{ textDecoration: "line-through", color: "#888", marginRight: "10px" }}>LKR 8500000</h6>
                <h6 style={{ color: "#8FED92", fontWeight: "bold" }}>LKR 8000000</h6>
              </div>

              <Button color="primary" outline className="mt-2">
                view more
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col lg="3" md="6">
          <Card>
            <CardImg top src={car5} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Dacia / Sandero</CardTitle>
              <CardText>
                Well-maintained, single-owner car with low mileage.
              </CardText>
              <CardText>Location : <b>Colombo</b></CardText>
              <CardText>Condition : <b>Used</b></CardText>
              <CardText>Year : <b>2015</b></CardText>

              <div style={{ display: "flex", alignItems: "center" }}>
                <h6 style={{ textDecoration: "line-through", color: "#888", marginRight: "10px" }}>LKR 8500000</h6>
                <h6 style={{ color: "#8FED92", fontWeight: "bold" }}>LKR 8000000</h6>
              </div>

              <Button color="primary" outline className="mt-2">
                view more
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col lg="3" md="6">
          <Card>
            <CardImg top src={car6} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">Dacia / Sandero</CardTitle>
              <CardText>
                Well-maintained, single-owner car with low mileage.
              </CardText>
              <CardText>Location : <b>Colombo</b></CardText>
              <CardText>Condition : <b>Used</b></CardText>
              <CardText>Year : <b>2015</b></CardText>

              <div style={{ display: "flex", alignItems: "center" }}>
                <h6 style={{ textDecoration: "line-through", color: "#888", marginRight: "10px" }}>LKR 8500000</h6>
                <h6 style={{ color: "#8FED92", fontWeight: "bold" }}>LKR 8000000</h6>
              </div>

              <Button color="primary" outline className="mt-2">
                view more
              </Button>
            </CardBody>
          </Card>
        </Col>

      </Row>

    </>
  );
};

export default FeaturedCars;