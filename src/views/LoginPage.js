import React, { useEffect } from "react";
import Navbar from "@src/views/nav/Navbar";
import { Button, CardText, Col, Form, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { User } from "react-feather";
import InputPasswordToggle from "@components/input-password-toggle";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as commonFunc from "@src/utility/commonFunc";
import {useSelector, useDispatch } from "react-redux";
import * as actionCreator from "@src/store/domain/auth/action";

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loggedInStatus = useSelector(state => state.auth.loggedInStatus, () => {})

  const initialValues = {
    username: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required")
  });


  const onSubmit = async (values, { resetForm }) => {
    console.log('values >> ', values);
    await dispatch(actionCreator.loginUser(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  useEffect(() => {

    if (loggedInStatus) {
      navigate('/home')
    }
  }, [dispatch, loggedInStatus]);
  
  return (
    <div>

      <Navbar />

      <Row className="d-flex justify-content-center align-items-center mt-4" style={{ height: "90vh" }}>
        <Col lg="4">

          <Form>
            <Row>
              <div className="d-flex justify-content-center mb-4 pb-2 border-bottom">
                <h3 className="fw-bolder">LOGIN</h3>
              </div>
              <Col sm="12">
                <div className="mb-1">
                  <Label className="form-label" for="nameVerticalIcons">
                    User Name
                  </Label>
                  <InputGroup className="input-group-merge">
                    <InputGroupText>
                      <User size={15} />
                    </InputGroupText>
                    <Input type="text" name="name" id="nameVerticalIcons" placeholder="name"
                           {...formik.getFieldProps("username")}
                    />
                  </InputGroup>
                  {commonFunc.helperText(formik.touched.username && formik.errors.username)}

                </div>
              </Col>
              <Col sm="12">
                <div className="mb-2">
                  <InputPasswordToggle label="Password" htmlFor="basic-default-password"
                                       {...formik.getFieldProps("password")}
                  />
                  {commonFunc.helperText(formik.touched.password && formik.errors.password)}

                </div>
              </Col>
              <Col sm="12" className="mb-1">
                <div className="form-check">
                  <Input type="checkbox" id="remember-me-vertical-icons" defaultChecked={false} />
                  <Label className="form-check-label" for="remember-me-vertical-icons">
                    Remember Me
                  </Label>
                </div>
              </Col>
              <Col sm="12">
                <div className="d-flex">
                  <Button className="" block color="primary" type="submit" onClick={formik.handleSubmit}>
                    Log In
                  </Button>
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <small style={{ color: "black" }}>
                    create an account!
                    <Link to="/signup-user">
                      <small className="ms-1"><b>Sign Up</b></small>
                    </Link>
                  </small>
                </div>
              </Col>
            </Row>
          </Form>

        </Col>
      </Row>

    </div>
  );
};

export default LoginPage;