import React from 'react'
import TableWithButtons from "../../../tables/data-tables/basic/TableWithButtons"
import { newscleColumns } from '../../../tables/data-tables/data'
import DataGetter from '../../ControleMember/DataGetter'

const AllNews = () => {
  const mydata = DataGetter("http://localhost:5000/api/news/category/news")
  console.log(mydata, "news")
  return (
    <>
      <TableWithButtons  mydata={mydata}  title="  لیست  همه ی مقالات در سایت  : " column={newscleColumns}/>
    </>
    )
}
export default AllNews