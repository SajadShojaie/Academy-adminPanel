import React from 'react'
import TableWithButtons from "../../../tables/data-tables/basic/TableWithButtons"
import { columns } from '../../../tables/data-tables/data'
import DataGetter from '../../ControleMember/DataGetter'

const AllCourses = () => {
  //call api
  const mydata = DataGetter("http://localhost:5000/api/course/getall")
  
  return (
    <>
      
      <TableWithButtons mydata={mydata} title="  لیست ترم های موجود : " column={columns} />
    </>
    )
}
export default AllCourses
