import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import './LogInForm.css';

const StyledDiv = styled.div`
    border: 1px solid black;
    max-width: 20rem;
    margin: 1rem auto;
    display: flex;  
    flex-direction: column;
    height: 400px;
`;


const LogInForm = ({ errors, touched, status }) => {

    const [users, setUsers] = useState([]);
    // console.log('The Data === ', users);
    useEffect(() => {
        if (status){
            setUsers([...users, status]);
        }
    }, [status]);

    return(
        <StyledDiv>
            <h3>Welcome Back!</h3>
         
                <Form className='form-inputs'>
                    <Field type="text" name="username" placeholder="Name" />
                    {touched.name && errors.name &&(
                        <p className="error">{errors.name}</p>
                    )}
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password &&(
                        <p className="error">{errors.password}</p>
                    )}

                    <button type="submit">Submit</button>
                </Form>
                {users.map(user => (
                <ul key={user.id}>
                    <li>name: {user.name}</li>
                    <li>password: {user.password}</li>
                </ul>
            ))}
        </StyledDiv>
    );
};

const FormikLogInForm = withFormik({

    mapPropsToValues({ username, password}){
        return {
            username: username || '',
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