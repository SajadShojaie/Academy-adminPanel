import React, { useEffect, useState } from 'react'
import axios from '../../../../mycore/Services/interceptor/interceptor'
import TableBasic from "../../../tables/reactstrap/TableBasic"

const Comment = () => {
  const [datas, setDatas] = useState([])
  //call api
  useEffect(() => {
    const getter = async () => {
      const mydata = await axios.get("http://localhost:5000/api/comments/")
      setDatas(mydata.data)
    }
    getter()

  }, [])
  
  //handelDelete
  const handelDelete = (data) => {
    setDatas(datas.filter((m) => m !== data))
  }
  return (
    <>
      {datas.length > 0 ? <TableBasic mydata={datas} handelDelete={handelDelete}/> : <p className='fs-1 text-center mt-2'>کامنتی وجود ندارد</p>} 
    </>
  )
}
export default Comment