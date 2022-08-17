import axios from "axios"
import Http from "../../interceptor/interceptor"
import { toast } from "react-toastify"

const PostApi = async (url, obj, config) => {
  try {
    //call api
    const result = await Http.post(url, obj, config)
    console.log(result)

    return result
  } catch (error) {
    console.log("we have an erorr", error)

    if (error.response && (error.response.status >= 400 || error.response.status <= 500)) {
      toast.error(error.response.data.message[0].message)
    } else if (error.response && error.response.status === 500) {
      toast.error(error.response.data)
    } else {
      toast.error(error.message)
    }
  }
}

export default PostApi
