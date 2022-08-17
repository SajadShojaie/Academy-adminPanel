import React, { useState } from 'react'
import AddEmployeeForm from "../../forms/validations/formik/AddEmployeeForm"

const editEmployee = ({location, history}) => {
  const [pageData] = useState(location.state)
  return (
  <> 
    <AddEmployeeForm pageData={pageData} maintitle="ویرایش اطلاعات کارمند :" history={history}/>
  </>
  )
}
export default editEmployee