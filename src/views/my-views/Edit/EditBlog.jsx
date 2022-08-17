import React, { useState } from 'react'
import AddBlogForm from "../../forms/validations/formik/AddBlogForm"

const EditBlog = ({location, history}) => {
  const [pageData] = useState(location.state)
  return (
    <>
      <AddBlogForm maintitle="ویرایش بلاگ :" pageData={pageData} history={history}/>
    </>
  )
}
 
export default EditBlog
