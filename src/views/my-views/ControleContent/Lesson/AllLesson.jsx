import React from 'react'
import TableWithButtons from "../../../tables/data-tables/basic/TableWithButtons"
import { lessonColumns } from '../../../tables/data-tables/data'
import DataGetter from '../../ControleMember/DataGetter'

const AllLesson = () => {
  const mydata = DataGetter("http://localhost:5000/api/lesson")
  console.log(mydata, "lesson")
  return (
    <>
      <TableWithButtons mydata={mydata}  title="  لیست دوره های موجود : " column={lessonColumns}/>
    </>
    )
}
export default AllLesson