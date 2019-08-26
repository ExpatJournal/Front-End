import React, { useState } from "react";
import axios from "axios";
import * as Yup from 'yup'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { withFormik, Form, Field } from 'formik'

const SignUp = ({ values, handleChange, errors, touched, status }) => {
return(
  <div>
    <Form className="form">
          <div className="form-group">
            {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
            <label className="label">First Name</label>
            <Field className="input" name="firstName" type="text" placeholder="Type here..." />
          </div>
          <div className="form-group">
            {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
            <label className="label">Last Name</label>
            <Field className="input" name="lastName" type="text" placeholder="Type here..." />
          </div>
          <div className="form-group">
            {touched.username && errors.username && <p>{errors.username}</p>}
            <label className="label">Username</label>
            <Field className="input" name="username" type="text" placeholder="Type here..." />
          </div>
          <div className="form-group">
            {touched.password && errors.password && <p>{errors.password}</p>}
            <label className="label">Password</label>
            <Field className="input" name="password" type="text" placeholder="Type here..." />
          </div>
          <div className="form-group">
            {touched.passwordConfirm && errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
            <label className="label">Password Confirmation</label>
            <Field className="input" name="passwordConfirm" type="text" placeholder="Type here..." />
          </div>
          <button type="submit" className="btn">
          Submit &rarr;
          </button>
        </Form>
  </div>
  )
}
export default withFormik({
  mapPropsToValues({ firstName, lastName, username, password, passwordConfirm } ) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      password: password || "",
      passwordConfirm: passwordConfirm || "",
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('Please enter your first name'),
    lastName: Yup.string().required('Please enter your last name'),
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Please enter a valid password'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  }),
  handleSubmit(values, formikBag) {
    // formikBag gives access to .push allowing a redirect after a user signs up
  console.log('values', values);
  const url = "";
  axiosWithAuth()
    .post(url)
    .then(response => {
      console.log("res", response);
      // formikBag.props.history.push("/friends");
    })
    .catch(e => {
      console.log(e.response.data);
    });
}
})(SignUp)
