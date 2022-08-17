import { useParams } from "react-router-dom"
import {setItem} from "../../../mycore/Services/Storage/Storage"

const Auth = () => {
  //get the user token
  const {userData} = useParams()

  const obj = {
    ability:[{action: "manage", subject: "all"}],
    accessToken:userData,
    avatar: "/static/media/avatar-s-11.1d46cc62.jpg",
    email: "admin@demo.com",
    extras: {eCommerceCartItemsCount: 5},
    fullName: "sajad",
    id: 1,
    refreshToken:userData,
    role: "admin",
    username: "sajad"
  }


  //save user token in local storage
  setItem("userData", JSON.stringify(obj))

  window.location = "http://localhost:3001/dashboard"
  return null
}
 
export default Auth