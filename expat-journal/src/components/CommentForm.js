import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import FeedCard from './FeedCard';
const CommentForm = ({errors, touched, values, status}) => {
    const [users, setUsers] = useState([]);
    console.log('this is touched', touched);
    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);
 
 
     return (
         <div className="comment-form">
              <FeedCard/>
             
             <h1 className="ui header"></h1>
               {users.map(user => (
                  <div>
                <ul key={user.id}>
                    <h3></h3>
                    <li>Comment: {user.comment}</li>
                    
                    </ul>
                  </div>
             ))}
             
            
            
         
             <Form className="ui action input">
               
               <Field  type="text" name="comment" placeholder="Comment" />
               {touched.name && errors.name && (
                   <p className="error">{errors.name}</p>
               )}
              
               <button type= "submit"> Submit </button>
             
 
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