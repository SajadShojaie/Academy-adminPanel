import React, { useState } from 'react'
import AddCoursesForm from "../../forms/validations/formik/AddCoursesForm"
import DataGetter from '../ControleMember/DataGetter'

const EditCourses = ({location, history}) => {
  const [pageData] = useState(location.state)
  const teachers = DataGetter("http://localhost:5000/api/employee/getallteachers")
  const lessons = DataGetter("http://localhost:5000/api/lesson")

  return (
    <>
      <AddCoursesForm maintitle="ویرایش ترم : " pageData={pageData} history={history} 
        teachers={teachers} lessons={lessons} /> 
    </>
  )
}
 
export default EditCourses
