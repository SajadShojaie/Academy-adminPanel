import React from 'react'
import AddRemoveStudentForm from "../../forms/validations/formik/AddRemoveStudentForm"
import DataGetter from './DataGetter'

const AddRemoveStudent = () => {
  const allStudent = DataGetter("http://localhost:5000/api/student/getall")
  const allCourses = DataGetter("http://localhost:5000/api/course/getall")
  return (
    <>
      <AddRemoveStudentForm allStudent={allStudent} allCourses={allCourses}/>
        
    </>
    )
}
 
export default AddRemoveStudent
