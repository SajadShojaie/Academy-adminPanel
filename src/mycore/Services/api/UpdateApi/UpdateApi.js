// import axios from "axios";
import Http from "../../interceptor/interceptor"
import { toast } from "react-toastify"

const UpdateApi = async (url, obj) => {
  try {
    //call api
    const result = await Http.put(url, obj)

    //add toastify
    toast.success(result.data.message[0].message)

    console.log(result)

    return result
  } catch (error) {
    console.log("we have an erorr", error)

    if (error.response && error.response.status === 400) {
      toast.error(error.response.data.message[0].message)
    } else if (error.response && error.response.status === 500) {
      toast.error(error.response.data)
    } else {
      toast.error(error.message)
    }
  }
}

export default UpdateApi
