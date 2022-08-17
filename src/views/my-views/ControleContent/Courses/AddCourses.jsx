import React from 'react'
import AddCoursesForm from "../../../forms/validations/formik/AddCoursesForm"
import DataGetter from '../../ControleMember/DataGetter'

const AddCourses = () => {
  const teachers = DataGetter("http://localhost:5000/api/employee/getallteachers")
  const lessons = DataGetter("http://localhost:5000/api/lesson")
  
  return (
    <>
      <AddCoursesForm maintitle="افزودن ترم : " teachers={teachers} lessons={lessons}/>
    </>
    )
}
export default AddCourses