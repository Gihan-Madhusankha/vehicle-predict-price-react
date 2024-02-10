import React, { useEffect } from "react";
import Navbar from "@src/views/nav/Navbar";
import { Button, CardText, Col, Form, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { User, Mail } from "react-feather";
import InputPasswordToggle from "@components/input-password-toggle";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import * as actionCreator from "@src/store/domain/auth/action";
import { useDispatch, useSelector } from "react-redux";
import * as commonFunc from "@src/utility/commonFunc";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpStatus = useSelector(state => state.auth.signUpStatus, () => {
  });

  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
    email: Yup.string().required("email is required")
  });

  const onSubmit = async (values, { resetForm }) => {
    console.log("values >> ", values);

    await dispatch(actionCreator.signUpUser(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  useEffect(() => {
    if (signUpStatus) {
      commonFunc.notifyMessage("user create successfully", 1)

      setTimeout(() => {
        navigate("/login-user");
      }, 300);
    }
  }, [signUpStatus]);


  return (
    <div>

      <Navbar />

      <Row className="d-flex justify-content-center align-items-center mt-4" style={{ height: "90vh" }}>
        <Col lg="4">

          <Form>
            <Row>
              <div className="d-flex justify-content-center mb-4 pb-2 border-bottom">
                <h3 className="fw-bolder">SIGN UP</h3>
              </div>
              <Col sm="12">
                <div className="mb-1">
                  <Label className="form-label" for="username">
                    User Name
                  </Label>
                  <InputGroup className="input-group-merge">
                    <InputGroupText>
                      <User size={15} />
                    </InputGroupText>
                    <Input type="text" name="username" id="username" placeholder="name"
                           {...formik.getFieldProps("username")}
                    />
                  </InputGroup>
                  {commonFunc.helperText(formik.touched.username && formik.errors.username)}

                </div>
              </Col>
              <Col sm="12">
                <div className="mb-1">
                  <Label className="form-label" for="email">
                    Email
                  </Label>
                  <InputGroup className="input-group-merge">
                    <InputGroupText>
                      <Mail size={15} />
                    </InputGroupText>
                    <Input type="email" name="email" id="email" placeholder="user@gmail.com"
                           {...formik.getFieldProps("email")}
                    />
                  </InputGroup>
                  {commonFunc.helperText(formik.touched.email && formik.errors.email)}

                </div>
              </Col>
              <Col sm="12">
                <div className="mb-2">
                  <InputPasswordToggle name="password" label="Password" htmlFor="basic-default-password"
                                       {...formik.getFieldProps("password")}
                  />
                  {commonFunc.helperText(formik.touched.password && formik.errors.password)}
                </div>

              </Col>
              <Col sm="12">
                <div className="d-flex">
                  <Button className="" block color="primary" type="submit" onClick={formik.handleSubmit}>
                    Sign Up
                  </Button>
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <small style={{ color: "black" }}>
                    already an account!
                    <Link to="/login-user">
                      <small className="ms-1"><b>Log In</b></small>
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

export default SignUpPage;