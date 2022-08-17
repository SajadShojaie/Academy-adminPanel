import React, { useState } from 'react'
import AddLessonForm from "../../forms/validations/formik/AddLessonForm"
import DataGetter from '../ControleMember/DataGetter'

const EditLesson = ({location, history}) => {
  const [pageData] = useState(location.state)
  const categories =  DataGetter("http://localhost:5000/api/category/getall")

  return (
    <>
      <AddLessonForm maintitle="ویرایش دروه :" pageData={pageData}  categories={categories} history={history}/>
    </>
  )
}
 
export default EditLesson
