import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Fullname is required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Should be 8 chars minimum.")
    .matches(/^(?=.*[a-z])/, "Must contains at least one lowercase.")
    .matches(/^(?=.*[A-Z])/, "Must contains at least one uppercase.")
    .matches(/^(?=.*[0-9])/, "Must contains at least a number."),
});

const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="sign-up-bg">
      <div className="container text-center">
        <div className="sign-up__container">
          <div className="logo-container">
            <img src="image/logo.png" alt="logo" />
          </div>
          <div className="sign-up-form">
            <h2 className="title">Welcome to Cursus</h2>
            <p>Sign Up and Start Shopping!</p>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={SignupSchema}
            >
              {({ errors, touched }) => (
                <Form className="text-start">
                  <div className="input-field">
                    {errors.fullName && touched.fullName ? (
                      <div className="error-msg"></div>
                    ) : null}
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="form-control"
                    />
                    {errors.fullName && touched.fullName && (
                      <p className="error-txt">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="input-field">
                    {errors.email && touched.email ? (
                      <div className="error-msg"></div>
                    ) : null}
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                    />
                    {errors.email && touched.email && (
                      <p className="error-txt">{errors.email}</p>
                    )}
                  </div>
                  <div className="input-field">
                    {errors.password && touched.password ? (
                      <div className="error-msg"></div>
                    ) : null}
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                    {errors.password && touched.password && (
                      <p className="error-txt">{errors.password}</p>
                    )}
                  </div>
                  <label className="checkbox">
                    I'm in for emails with with exciting discounts and
                    personalize recommendations
                    <Field type="checkbox" name="agreeEmail" />
                    <span className="checkmark"></span>
                  </label>
                  <button
                    className={`btn text-center w-100 submit-btn`}
                    type="submit"
                  >
                    Sign up
                  </button>
                </Form>
              )}
            </Formik>
            <p className="policy-txt">
              By signing up, you agree to our{" "}
              <span onClick={() => navigate("/terms_of_use")}>
                Terms of use
              </span>{" "}
              and{" "}
              <span onClick={() => navigate("/terms_of_use")}>
                Privacy policy
              </span>
            </p>
            <p>
              Don't have an account?{" "}
              <span onClick={() => navigate("/login")}> Log In</span>
            </p>
          </div>
        </div>
        <p className="sign-footer">
          <img src="images/sign_logo.png" alt="" />© 2022{" "}
          <span className="fw-bold">Cursus</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
