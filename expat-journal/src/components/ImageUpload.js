import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './DragNDrop.css';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'

function ImageUpload ({errors, touched}){
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return(
        <div>
            <div className='pageText'>
                <h2>Upload an Image</h2>
            </div>
            <section className='centerContainer'>
            
                    <div className='dragNDrop' {...getRootProps()}>
                        <input {...getInputProps()}/>
                        <img className='uploadIcon' height="150"  src="images/uploadButton.png" alt="This is an Upload Button"></img>
                    </div>

                <Form className="sign-up-form">

                    <div className="form-group">
                        {touched.caption && errors.caption && <p>{errors.caption}</p>}
                        <label className="caption">Type A Caption</label>
                        <Field className="input" name="caption" type="text" component='textarea' placeholder="Type here..." />
                    </div>
                </Form>
            </section>
            <button type="submit" className="btn">Submit</button>
        </div>
    );
};
const FormikImageUpload = withFormik({
    mapPropsToValues({ caption } ) {
      return {
        caption: caption || "",
      };
    },
    validationSchema: Yup.object().shape({
        caption: Yup.string().required('Please enter a caption'),
    }),
    handleSubmit() {
      // formikBag gives access to .push allowing a redirect after a user signs up
    // console.log('values', values);
    // formikBag.props.history.push("/feed")
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
  })(ImageUpload)

  export default FormikImageUpload;