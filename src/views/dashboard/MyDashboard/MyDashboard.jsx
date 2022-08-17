import React, { useState } from 'react'
import Statistics from "../../ui-elements/cards/statistics/StatsCard"
import Newsletter from "../../ui-elements/cards/statistics/Newsletter"
import Information from './Information/Information'
import DataGetter from '../../my-views/ControleMember/DataGetter'
import { useuserInfo } from '../../../utility/context/UserInfo.context'

const MyDashboard = () => {
  //get this user info from context that get from cookie
  const {employeeModel} = useuserInfo()

  //set data for information section
  const [Datas] = useState([
    { title: "نام کاربری", des: employeeModel.fullName, id: "1" },
    { title: "نقش", des: employeeModel.role, id: "2", style: "not-allowed" },
    { title: "ایمیل", des: employeeModel.email, id: "3" },
    { title: "تاریخ تولد", des: employeeModel.birthDate, id: "4" },
    { title: "کد ملی", des: employeeModel.nationalId, id: "5" },
    { title: "شماره همراه", des: employeeModel.phoneNumber, id: "6" },
    { title: "وضعیت", des: employeeModel.isActive ? "active" : "un active", id: "7"},
    { title: "آدرس", des: employeeModel.address,  id: "8"}
  ])

  //get data foe header section 
  const allCourses = DataGetter("http://localhost:5000/api/course/getall")
  const allLesson = DataGetter("http://localhost:5000/api/lesson")
  const allNews = DataGetter("http://localhost:5000/api/news/category/news")
  const allArticle = DataGetter("http://localhost:5000/api/news/category/article")
  const allStudent = DataGetter("http://localhost:5000/api/student/getall")
  const allTeachers = DataGetter("http://localhost:5000/api/employee/getallteachers")

  return (
    <>
      <div>
        <Statistics  allCourses={allCourses} allLesson={allLesson} 
          allNews={allNews} allArticle={allArticle}/>
      </div>
      <div className='d-flex justify-content-around align-items-center'>
        <Information Datas={Datas}/>
        <div>
        <Newsletter warning="red" allStudent={allStudent} />
        <Newsletter warning="red" allTeachers={allTeachers}/>

        </div>
      </div>
    </>
  )
}
export default MyDashboard