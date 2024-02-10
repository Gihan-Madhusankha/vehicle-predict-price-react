/*eslint-disable*/
import React, { useState, useEffect } from "react";
import Navbar from "@src/views/nav/Navbar";
import { Button, CardText, CardTitle, Col, Form, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { User, Phone } from "react-feather";
import InputPasswordToggle from "@components/input-password-toggle";
import { Link } from "react-router-dom";
import ReactFiles from "../components/react-files/ReactFiles";
import CreatableSelect from "react-select/creatable";
import * as actionCreator from '@src/store/domain/post/action'
import * as PostService from '@src/services/post';
import {useDispatch, useSelector} from 'react-redux';

const brandOptions = [
  { value: "Ford", label: "Ford" },
  { value: "BMW", label: "BMW" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Porsche", label: "Porsche" },
  { value: "Audi", label: "Audi" },
  { value: "Toyota", label: "Toyota" },
  { value: "Lexus", label: "Lexus" },
  { value: "Jeep", label: "Jeep" },
  { value: "Land", label: "Land" },
  { value: "Nissan", label: "Nissan" },
  { value: "Cadillac", label: "Cadillac" },
  { value: "GMC", label: "GMC" },
  { value: "RAM", label: "RAM" },
  { value: "Dodge", label: "Dodge" },
  { value: "Tesla", label: "Tesla" },
  { value: "Kia", label: "Kia" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mazda", label: "Mazda" },
  { value: "Acura", label: "Acura" },
  { value: "Honda", label: "Honda" },
  { value: "INFINITI", label: "INFINITI" },
  { value: "Volkswagen", label: "Volkswagen" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "Other", label: "Other" },
  { value: "Jaguar", label: "Jaguar" },
  { value: "Volvo", label: "Volvo" },
  { value: "Maserati", label: "Maserati" },
  { value: "Bentley", label: "Bentley" },
  { value: "MINI", label: "MINI" },
  { value: "Buick", label: "Buick" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Genesis", label: "Genesis" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Alfa", label: "Alfa" },
  { value: "Rivian", label: "Rivian" },
  { value: "Hummer", label: "Hummer" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Ferrari", label: "Ferrari" },
  { value: "Rolls-Royce", label: "Rolls-Royce" }
];

const modelOptions = [
  { value: "M3 Base", label: "M3 Base" },
  { value: "F-150 XLT", label: "F-150 XLT" },
  { value: "Corvette Base", label: "Corvette Base" },
  { value: "1500 Laramie", label: "1500 Laramie" },
  { value: "Wrangler Sport", label: "Wrangler Sport" },
  { value: "Camaro 2SS", label: "Camaro 2SS" },
  { value: "Model Y Long Range", label: "Model Y Long Range" },
  { value: "Mustang GT Premium", label: "Mustang GT Premium" },
  { value: "911 Carrera", label: "911 Carrera" },
  { value: "M4 Base", label: "M4 Base" },
  { value: "F-250 Lariat", label: "F-250 Lariat" },
  { value: "Explorer XLT", label: "Explorer XLT" },
  { value: "911 Carrera S", label: "911 Carrera S" },
  { value: "E-Class E 350", label: "E-Class E 350" },
  { value: "E-Class E 350 4MATIC", label: "E-Class E 350 4MATIC" },
  { value: "F-150 Lariat", label: "F-150 Lariat" },
  { value: "M5 Base", label: "M5 Base" },
  { value: "ES 350 Base", label: "ES 350 Base" },
  { value: "F-250 XLT", label: "F-250 XLT" },
  { value: "R1S Adventure Package", label: "R1S Adventure Package" },
  { value: "Other", label: "Other" }
];

const fuelOptions = [
  { value: "Gasoline", label: "Gasoline" },
  { value: "Hybrid", label: "Hybrid" },
  { value: "E85 Flex Fuel", label: "E85 Flex Fuel" },
  { value: "Diesel", label: "Diesel" },
  { value: "Plug-In Hybrid", label: "Plug-In Hybrid" }
];


const engineOptions = [
  { value: "835.0HP Electric Motor Electric Fuel System", label: "835.0HP Electric Motor Electric Fuel System" },
  { value: "2.0L I4 16V GDI DOHC Turbo", label: "2.0L I4 16V GDI DOHC Turbo" },
  { value: "355.0HP 5.3L 8 Cylinder Engine Gasoline Fuel", label: "355.0HP 5.3L 8 Cylinder Engine Gasoline Fuel" },
  { value: "420.0HP 6.2L 8 Cylinder Engine Gasoline Fuel", label: "420.0HP 6.2L 8 Cylinder Engine Gasoline Fuel" },
  { value: "300.0HP 3.0L Straight 6 Cylinder Engine Gasoline Fuel", label: "300.0HP 3.0L Straight 6 Cylinder Engine Gasoline Fuel" },
  { value: "240.0HP 2.0L 4 Cylinder Engine Gasoline Fuel", label: "240.0HP 2.0L 4 Cylinder Engine Gasoline Fuel" },
  { value: "285.0HP 3.6L V6 Cylinder Engine Gasoline Fuel", label: "285.0HP 3.6L V6 Cylinder Engine Gasoline Fuel" },
  { value: "5.7L V8 16V MPFI OHV", label: "5.7L V8 16V MPFI OHV" },
  { value: "340.0HP 3.0L V6 Cylinder Engine Gasoline Fuel", label: "340.0HP 3.0L V6 Cylinder Engine Gasoline Fuel" },
  { value: "3.6L V6 24V MPFI DOHC", label: "3.6L V6 24V MPFI DOHC" },
  { value: "3.6L V6 24V GDI DOHC", label: "3.6L V6 24V GDI DOHC" },
  { value: "268.0HP 3.5L V6 Cylinder Engine Gasoline Fuel", label: "268.0HP 3.5L V6 Cylinder Engine Gasoline Fuel" },
  { value: "455.0HP 6.2L 8 Cylinder Engine Gasoline Fuel", label: "455.0HP 6.2L 8 Cylinder Engine Gasoline Fuel" },
  { value: "302.0HP 3.5L V6 Cylinder Engine Gasoline Fuel", label: "302.0HP 3.5L V6 Cylinder Engine Gasoline Fuel" },
  { value: "425.0HP 3.0L Straight 6 Cylinder Engine Gasoline Fuel", label: "425.0HP 3.0L Straight 6 Cylinder Engine Gasoline Fuel" },
  { value: "490.0HP 6.2L 8 Cylinder Engine Gasoline Fuel", label: "490.0HP 6.2L 8 Cylinder Engine Gasoline Fuel" },
  { value: "445.0HP 4.4L 8 Cylinder Engine Gasoline Fuel", label: "445.0HP 4.4L 8 Cylinder Engine Gasoline Fuel" },
  { value: "295.0HP 3.5L V6 Cylinder Engine Gasoline Fuel", label: "295.0HP 3.5L V6 Cylinder Engine Gasoline Fuel" },
  { value: "4.0L V8 32V GDI DOHC Twin Turbo", label: "4.0L V8 32V GDI DOHC Twin Turbo" },
  { value: "3.5L V6 24V PDI DOHC Twin Turbo", label: "3.5L V6 24V PDI DOHC Twin Turbo" },
  { value: "Other", label: "Other" }
];

const transmissionOptions = [
  { value: "A/T", label: "A/T" },
  { value: "8-Speed A/T", label: "8-Speed A/T" },
  { value: "Transmission w/Dual Shift Mode", label: "Transmission w/Dual Shift Mode" },
  { value: "6-Speed A/T", label: "6-Speed A/T" },
  { value: "6-Speed M/T", label: "6-Speed M/T" },
  { value: "Automatic", label: "Automatic" },
  { value: "7-Speed A/T", label: "7-Speed A/T" },
  { value: "8-Speed Automatic", label: "8-Speed Automatic" },
  { value: "10-Speed A/T", label: "10-Speed A/T" },
  { value: "5-Speed A/T", label: "5-Speed A/T" },
  { value: "9-Speed A/T", label: "9-Speed A/T" },
  { value: "6-Speed Automatic", label: "6-Speed Automatic" },
  { value: "4-Speed A/T", label: "4-Speed A/T" },
  { value: "1-Speed A/T", label: "1-Speed A/T" },
  { value: "CVT Transmission", label: "CVT Transmission" },
  { value: "5-Speed M/T", label: "5-Speed M/T" },
  { value: "10-Speed Automatic", label: "10-Speed Automatic" },
  { value: "9-Speed Automatic", label: "9-Speed Automatic" },
  { value: "M/T", label: "M/T" },
  { value: "Automatic CVT", label: "Automatic CVT" },
  { value: "Other", label: "Other" }
];


const PostAdPage = () => {
  const dispatch = useDispatch();

  const prediction = useSelector(state => state.post.prediction, () => {})

  const [imageState, setImageState] = useState({
    imageFile: null,
    imageUrl: null
  });

  const imageHandler = (imageFile, base64) => {
    setImageState({ imageFile, imageUrl: base64 });
    setFormData({ ...formData, imageUrl: base64 });
  };

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    mileage: "",
    model_year: "",
    fuel_type: "",
    engine: "",
    transmission: "",
    imageUrl: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBrandChange = (selectedOption) => {
    setFormData({ ...formData, brand: selectedOption?.value || "" });
  };

  const handleModelChange = (selectedOption) => {
    setFormData({ ...formData, model: selectedOption?.value || "" });
  };

  const handleFuelTypeChange = (selectedOption) => {
    setFormData({ ...formData, fuel_type: selectedOption?.value || "" });
  };

  const handleEngineChange = (selectedOption) => {
    setFormData({ ...formData, engine: selectedOption?.value || "" });
  };

  const handleTransmissionChange = (selectedOption) => {
    setFormData({ ...formData, transmission: selectedOption?.value || "" });
  };
  
  useEffect(() => {
    if (imageState.imageFile) {
      setFormData({ ...formData, imageUrl: imageState?.imageFile || "" })
    }
    console.log('imageUrl', imageState.imageFile);
    console.log('imageState', imageState);
  }, [imageState])

  const handlePredictPrice = async () => {
    console.log(formData);
    await dispatch(actionCreator.predictPrice(formData))
    // PostService.predictPrice(formData)
    //   .then(res => {
    //     console.log('res >> ', res);
    //   })
    //   .catch(rej => {
    //     console.log('rej >> ', rej);
    //   })
  }

  const handleSubmit = async (e) => {
    console.log('data >> ', formData);
    await dispatch(actionCreator.postAd(formData))
  };


  useEffect(() => {
    console.log('predict value >> ', prediction );
  }, [prediction]);
  


  return (
    <div>

      <Navbar/>

      <Row className="d-flex justify-content-center"
           style={{ marginTop: "120px", marginBottom: "120px", height: "90vh", zIndex: '1' }}>
        <Col lg="8">

          <div className="d-flex justify-content-center mb-4 pb-2 border-bottom">
            <h3 className="fw-bolder">POST YOUR AD</h3>
          </div>

          <Row>
            <Col lg="6">
              <div className="">
                <Label className="form-label" for="nameVerticalIcons">
                  Brand
                </Label>
                <CreatableSelect onChange={handleBrandChange} name='brand' options={brandOptions} className="react-select" classNamePrefix="select" />
              </div>

              <div className="mt-1">
                <Label className="form-label" for="nameVerticalIcons">
                  Model
                </Label>
                <CreatableSelect onChange={handleModelChange} name='model' options={modelOptions} className="react-select" classNamePrefix="select" />
              </div>

              <div className="mt-1">
                <Label className="form-label" for="nameVerticalIcons">
                  Mileage
                </Label>
                <Input value={formData.mileage} onChange={handleInputChange} type="text" name="mileage" id="nameVerticalIcons" placeholder="km" />
              </div>

              <div className="mt-1">
                <Label className="form-label" for="nameVerticalIcons">
                  Model year
                </Label>
                <Input value={formData.model_year} onChange={handleInputChange} type="text" name="model_year" id="nameVerticalIcons" placeholder="xxxx" />
              </div>

              <div className="mt-1">
                <Label className="form-label" for="nameVerticalIcons">
                  Fuel Type
                </Label>
                <CreatableSelect onChange={handleFuelTypeChange} name='fuel_type' options={fuelOptions} className="react-select" classNamePrefix="select" />
              </div>

              <div className="mt-1">
                <Label className="form-label" for="nameVerticalIcons">
                  Engine
                </Label>
                <CreatableSelect onChange={handleEngineChange} name='engine' menuPlacement="top" options={engineOptions} className="react-select" classNamePrefix="select" />
              </div>

              <div className='mt-1'>
                <Label className="form-label" for="nameVerticalIcons">
                  Transmission
                </Label>
                <CreatableSelect onChange={handleTransmissionChange} name='transmission' menuPlacement="top" options={transmissionOptions} className="react-select" classNamePrefix="select" />
              </div>
            </Col>


            <Col lg="6" className="mt-5">
              <div className="d-flex justify-content-center">
                <ReactFiles multiple={false} sendImageData={imageHandler}
                            imageFile={imageState.imageUrl} />
              </div>

              <div>
                <div className="d-flex justify-content-center mt-3">
                  <CardTitle className="fw-bolder me-1 fs-4">Estimate Price</CardTitle>
                  <CardTitle className="fs-4 p-0" color="black">$ {prediction}</CardTitle>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <Button className="btn-post fw-bolder mt-3" color="#FFC800" type='submit' onClick={handlePredictPrice}
                        style={{ color: "black", background: "#FFC800" }}>Predict Price</Button>
              </div>

              <div className='ps-4 pe-4'>
                <Button className="mt-3" block color="primary" type="submit" onClick={handleSubmit}>
                  Post Your Ad
                </Button>
              </div>

            </Col>

          </Row>

        </Col>
      </Row>

    </div>
  );
};

export default PostAdPage;