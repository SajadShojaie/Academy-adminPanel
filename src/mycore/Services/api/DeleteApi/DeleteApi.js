import axios from "axios"
import Http from "../../interceptor/interceptor"
import { toast } from "react-toastify"

const DeleteApi = async (url, obj, config) => {
  try {
    //call api
    const result = await Http.delete(url, obj, config)
    console.log(result)
    toast.success("با موفقیت حذف شد")
    return result
  } catch (error) {
    console.log("we have an erorr", error)

    if (error.response && error.response.status === 400) {
      toast.error(error.response.data.message)
    } else if (error.response && error.response.status === 500) {
      toast.error(error.response.data)
    } else {
      toast.error(error.message)
    }
  }
}

export default DeleteApi
