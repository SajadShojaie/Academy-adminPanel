import React from 'react'
import TableMultilingual from "../../tables/data-tables/basic/TableMultilingual"
import DataGetter from './DataGetter'

const AllStudent = () => {
  //get data
  const mydata = DataGetter("http://localhost:5000/api/student/getall")
  console.log(mydata)

  return (
    <>
      <TableMultilingual mydata={mydata} title=" آمار دانشجویان سایت : "/>
    </>
    )
}
export default AllStudent