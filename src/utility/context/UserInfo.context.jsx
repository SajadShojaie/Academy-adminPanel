import {createContext, useContext, useState} from 'react'

// context
export const UserInfoContext = createContext()

//create custom hook
export const useuserInfo = () => {
  return useContext(UserInfoContext)
} 

//create context provider
const UserInfoProvider = ({children}) => {
  //get user info from cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
  }
  
  //save user info in state
  const [employeeModel, setEmployeeModel] = useState(JSON.parse(getCookie("employeeModel")))
 
  return (
    <UserInfoContext.Provider value={{employeeModel, setEmployeeModel}}>
      {children}
    </UserInfoContext.Provider>
  )
}

export default UserInfoProvider
