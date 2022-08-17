import React from 'react'
import { useuserInfo } from '../../../utility/context/UserInfo.context'
import AddEmployeeForm from "../../forms/validations/formik/AddEmployeeForm"

const EditProfile = () => {
  //get this user info from context that get from cookie
  const {employeeModel} = useuserInfo()
  return (
    <>
      <AddEmployeeForm  maintitle="ویرایش اطلاعات خودت : " pageData={employeeModel}/>
    </>
  )
  
}
export default EditProfile