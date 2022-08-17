import React from 'react'
import TableWithButtons from "../../../tables/data-tables/basic/TableWithButtons"
import { articleColumns } from '../../../tables/data-tables/data'
import DataGetter from '../../ControleMember/DataGetter'

const AllArticle = () => {
  const mydata = DataGetter("http://localhost:5000/api/news/category/article")
  console.log(mydata, "article")
  return (
    <>
      <TableWithButtons  mydata={mydata}  title="  لیست  همه ی مقالات در سایت  : " column={articleColumns}/>
    </>
    )
}
export default AllArticle