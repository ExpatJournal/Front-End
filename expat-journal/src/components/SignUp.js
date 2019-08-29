import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import HamburgerNav from './HamburgerNav'
import './SignUp.css';

const SignUp = ({ values, handleChange, errors, touched, status }) => {
  return (
    <div>
      <HamburgerNav />
      <div className="signup-wrapper">
        <h4>Sign Up to Expat's Journal</h4>
        <section className='centerContainer'>
          <Form className="sign-up-form">
            <div className="form-group">
              {touched.name && errors.name && <p>{errors.name}</p>}
              <label className="label">Name</label>
              <Field
                className="input"
                name="name"
                type="text"
                placeholder="What's your name?"
              />
            </div>
            <div className="form-group">
              {touched.email && errors.email && <p>{errors.email}</p>}
              <label className="label">Email</label>
              <Field
                className="input"
                name="email"
                type="text"
                placeholder="What's your email?"
              />
            </div>
            <div className="form-group">
              {touched.username && errors.username && <p>{errors.username}</p>}
              <label className="label">Username</label>
              <Field
                className="input"
                name="username"
                type="text"
                placeholder="Pick a username!"
              />
            </div>
            <div className="form-group">
              {touched.password && errors.password && <p>{errors.password}</p>}
              <label className="label">Password</label>
              <Field
                className="input"
                name="password"
                type="password"
                placeholder="Enter a password"
              />
            </div>
            <div className="form-group">
              {touched.passwordConfirm && errors.passwordConfirm && (
                <p>{errors.passwordConfirm}</p>
              )}
              <label className="label">Password Confirmation</label>
              <Field
                className="input"
                name="passwordConfirm"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <div className='btnContainer' >
              <button type="submit" className="btn">Submit &rarr;</button>
            </div>
          </Form>
        </section>
      </div>
    </div>
  );
};
export default withFormik({
  mapPropsToValues({ name, email, username, password, passwordConfirm }) {
    return {
      name: name || "",
      email: email || "",
      username: username || "",
      password: password || "",
      passwordConfirm: passwordConfirm || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email()
      .required("Please enter your email"),
    username: Yup.string().required("Please enter a username"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Please enter a valid password"),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
  }),
  handleSubmit(values, formikBag) {
    // formikBag gives access to .push allowing a redirect after a user signs up
    console.log("values", values);
    const url = "https://expatjournal.herokuapp.com/auth/users/register";
    axiosWithAuth()
      .post(url, {
        username: values.username,
        email: values.email,
        password: values.password
      })
      .then(response => {
        console.log("res", response);
        formikBag.props.history.push("/profile");
      })
      .catch(e => {
        console.log(e.response.data);
      });
  }
})(SignUp);
