import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import FeedCard from './FeedCard';
import CommentCard from './CommentCard';

import './CommentForm.css';
const CommentForm = ({errors, touched, values, status}) => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);
 
 
     return (  
            <div className="wrapper">
               
                 
                   
                
                 <Form className="comment-form">
                <div className="comment-card">

                 {users.map(user => (
                         
                         <CommentCard username={user.username} comment={user.comment}/>
                         
                            ))} 
                 </div>
 
                  <Field  className="text-field" type="text" component="textarea" name="comment" placeholder="Comment" />
                         {touched.name && errors.name && (
                         <p className="error">{errors.name}</p>
                     )}
               <div className="post-button-container"> <button className="post-button"type= "submit"> Post </button></div>
             </Form> 
             
         </div>
     )
 }
 
 const FormikComment = withFormik ({
     mapPropsToValues ({ comment,}) {
         return {
            
             comment: comment ||"",
            
         }
     },
 
     validationSchema: Yup.object().shape({
         comment: Yup.string().required(<p>Please leave your comment!</p>).min(3).max(50),
 
     }),
     
     handleSubmit (values, { setStatus } ) {
         axios
           .post("https://reqres.in/api/users", values)
           .then(res => {
               setStatus(res.data);
           })
           .catch(err => console.log(err.response));
         
 
     }
 
 })(CommentForm);
 
 export default FormikComment;