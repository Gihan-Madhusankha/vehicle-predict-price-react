import React, { useState } from "react";
import ReactFiles from "../components/react-files/ReactFiles";
import { Button, Card, Col, Input, Label, Row } from "reactstrap";

const PostAdd = () => {

  const [imageState, setImageState] = useState({
    imageFile: null,
    imageUrl: null
  });

  const imageHandler = (imageFile, base64) => {
    setImageState({ imageFile, imageUrl: base64 });
  };

  return (
    <Card className='p-5'>

      <Row>
        <Col xs={12} md={12} lg={12} className="mb-1">
          <div className="image-upload mb-3">
            <Col md={12} className="wrap">
              <div className="text-wrapper tile-wrapper">
                <p className="wrap-lbl">Vehicle Image</p>
                <ReactFiles multiple={false} sendImageData={imageHandler}
                            imageFile={imageState.imageUrl} />
              </div>
            </Col>
          </div>
        </Col>
      </Row>

      <Row>

        <Col xs={6} md={6} lg={6} className="mb-1">
          <Col xs={12} md={12} lg={12} className="mb-1">
            <Label className="form-label" for="name">
              Vehicle Type
            </Label>
            <Input name="name" placeholder="name" />

          </Col>
          <Col xs={12} md={12} lg={12} className="mb-1">
            <Label className="form-label" for="address">
              Vehicle Condition
            </Label>
            <Input name="address" placeholder="address" />
          </Col>
          <Col xs={12} md={12} lg={12} className="mb-1">
            <Label className="form-label" for="address">
              Vehicle Make
            </Label>
            <Input name="address" placeholder="address" />
          </Col>
          <Col xs={12} md={12} lg={12} className="mb-1">
            <Label className="form-label" for="address">
              Vehicle Model
            </Label>
            <Input name="address" placeholder="address" />
          </Col>
          <Col xs={12} md={12} lg={12} className="mb-1">
            <Label className="form-label" for="address">
              Year
            </Label>
            <Input name="address" placeholder="address" />
          </Col>
          <Col xs={12} md={12} lg={12} className="mb-1">
            <Label className="form-label" for="address">
              Transmission
            </Label>
            <Input name="address" placeholder="address" />
          </Col>
          <Col xs={12} md={12} lg={12} className="mb-1">
            <Label className="form-label" for="address">
              Fuel Type
            </Label>
            <Input name="address" placeholder="address" />
          </Col>

          <div className='d-flex justify-content-center'>
            <Button color='primary'>Predict Price</Button>
          </div>

        </Col>
      </Row>

    </Card>
  );
};

export default PostAdd;