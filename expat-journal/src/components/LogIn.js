import React, { useState } from "react";
import axios from "axios";
import * as Yup from 'yup'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { withFormik, Form, Field } from 'formik'

const LogIn = ({ values, handleChange, errors, touched, status }) => {
return(
  <div className="signup-wrapper">
    <h4>Log In</h4>
    <Form className="sign-up-form">

          <div className="form-group">
            {touched.username && errors.username && <p>{errors.username}</p>}
            <label className="label">Username</label>
            <Field className="input" name="username" type="text" placeholder="Enter your username" />
          </div>

          <div className="form-group">
            {touched.password && errors.password && <p>{errors.password}</p>}
            <label className="label">Password</label>
            <Field className="input" name="password" type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="btn">
          Submit &rarr;
          </button>
        </Form>
  </div>
  )
}
export default withFormik({
  mapPropsToValues({ username, password } ) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter your username'),
    password: Yup.string().required('Please enter your password'),
  }),
  handleSubmit(values, formikBag) {
    // formikBag gives access to .push allowing a redirect after a user signs up
  console.log('values', values);
  formikBag.props.history.push("/feed")
  // const url = "";
  // axiosWithAuth()
  //   .post(url)
  //   .then(response => {
  //     console.log("res", response);
  //     // formikBag.props.history.push("/feed");
  //   })
  //   .catch(e => {
  //     console.log(e.response.data);
  //   });
}
})(LogIn)
