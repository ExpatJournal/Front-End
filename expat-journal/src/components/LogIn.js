import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LogInForm = ({ errors, touched, values, status }) => {

    const [users, setUsers] = useState([]);
    console.log('The Data === ', users);
    useEffect(() => {
        if (status){
            setUsers([...users, status]);
        }
    }, [status]);

    return(
        <div>
            <h1>User Onboarding</h1>
         
                <Form>
                    <Field type="text" name="userName" placeholder="Name" />
                    {touched.name && errors.name &&(
                        <p className="error">{errors.name}</p>
                    )}
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password &&(
                        <p className="error">{errors.password}</p>
                    )}
                    <button type="submit">Submit</button>
                </Form>
        </div>
    );
};

const FormikLogInForm = withFormik({

    mapPropsToValues({ userName, email, password, Tos }){
        return {
            userName: userName || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required!'),
        email: Yup.string().required('Email is required!'),
        password: Yup.string().required('password is required!'),
        
    }),

    handleSubmit(values, { resetForm, setStatus }){
        axios
        .post('https://reqres.in/api/users', values)
        .then(res =>{
            console.log('ax response:', res)
            resetForm();
            setStatus(res.data);
            
        })
        .catch(err => {
            console.log(err);
            setStatus(false);
        });
    }
})(LogInForm);

export default FormikLogInForm;