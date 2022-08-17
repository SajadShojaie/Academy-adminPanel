import {getItem} from "./Storage"

//get user info from storage
const UserInfo = JSON.parse(getItem("studentModle"))

export default UserInfo