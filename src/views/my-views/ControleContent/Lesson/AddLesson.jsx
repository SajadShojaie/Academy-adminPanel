import React from 'react'
import AddLessonForm from "../../../forms/validations/formik/AddLessonForm"
import DataGetter from '../../ControleMember/DataGetter'

const AddLesson = () => {
  const categories =  DataGetter("http://localhost:5000/api/category/getall")
  return (
    <>
      <AddLessonForm maintitle= "افزودن دوره :" categories={categories}/>
    </>
  )
}
export default AddLesson
//