import React from 'react'
import TableMultilingual from "../../tables/data-tables/basic/TableMultilingual"
import DataGetter from "./DataGetter"

const AllEmployee = () => {
  //get data
  const mydata = DataGetter("http://localhost:5000/api/employee/getall")
  console.log(mydata)

  return (
    <>
      <TableMultilingual mydata={mydata} title="آمار کارمندان سایت : "/>
    </>
    )
}
export default AllEmployee