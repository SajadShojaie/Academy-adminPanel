import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Information.module.css"

const Information = ({Datas}) => {
  return ( 
    <div>
      <div className={` shadow ${style.about_respo}`}>
        <p className='mt-1 text-center' style={{fontWeight:"bold", color: "#b200e8b3"}}> اطلاعات حساب کاربری </p>
          <div>
            {Datas.map((data) => (
              <p
                style={{fontWeight:"bold"}}
                className='m-0 p-1 px-2 text-end'
                key={data.title}
              >
                <span className='px-1' style={{color:"#9494a5"}}>{data.des} </span> :
                {data.title}
              </p>
            ))}
          </div>
        <Link to='/EditProfile'>
          <button type="button" className="btn btn-success mx-auto d-block mt-2">
            ویرایش اطلاعات حساب کاربری
          </button>
        </Link>
      </div>
    </div>
  )
}
 
export default Information