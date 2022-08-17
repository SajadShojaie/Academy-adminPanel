import React from 'react'
import FormValidation from "../../forms/validations/formik/FormikValidation"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddStudent = () => {
  return (
  <> 
    <ToastContainer/>
    <FormValidation title="افزودن دانشجو :"/>
  </>
  )
}
export default AddStudent