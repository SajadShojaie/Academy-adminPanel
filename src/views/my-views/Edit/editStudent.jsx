import React, { useState } from 'react'
import FormValidation from "../../forms/validations/formik/FormikValidation"

const editStudent = ({location, history}) => {
  const [pageData] = useState(location.state)
  return (
  <> 
    <FormValidation pageData={pageData} title="ویرایش اطلاعات دانشجو :" history={history}/>
  </>
  )
}
export default editStudent