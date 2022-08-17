import { useEffect, useState } from 'react'
import GetApi from '../../../mycore/Services/api/GetApi/GetApi'

const DataGetter = (url) => {
  const [datas, setDatas] = useState([])
  //ispending

  useEffect(() => {
    const getter = async () => {
      const res = await GetApi(url)
      setDatas(res)
    }
    getter() 
  }, [])

  return datas
}
 
export default DataGetter