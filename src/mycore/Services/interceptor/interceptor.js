import axios from "axios"
import { getItem } from "../Storage/Storage"

const jwt_storage = JSON.parse(getItem("userData")).accessToken
// const jwt_session = JSON.parse(sessionStorage.getItem("userData")).accessToken

axios.interceptors.request.use((config) => {
  config.headers["x-auth-token"] = jwt_storage
  return config
})

export default axios
