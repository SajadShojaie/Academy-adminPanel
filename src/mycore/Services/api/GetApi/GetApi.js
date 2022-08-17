import axios from "axios"
import Http from "../../interceptor/interceptor"
import { toast } from "react-toastify"

const GetApi = async (url) => {
  try {
    //call api
    const result = await Http.get(url)
    return result.data.result
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.response.data.message)
    } else {
      toast.error(error.response.data.message)
    }
    toast.error(error.message)
    console.log("we have an erorr", error)
  }
}

export default GetApi
