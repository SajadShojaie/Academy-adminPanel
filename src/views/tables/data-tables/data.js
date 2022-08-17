// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import DeleteApi from '../../../mycore/Services/api/DeleteApi/DeleteApi'
import UpdateApi from '../../../mycore/Services/api/UpdateApi/UpdateApi'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Cell } from 'recharts'
import { Link } from 'react-router-dom'

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export let data

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    maxWidth: '100px'
  },
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '225px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '310px'
  },
  {
    name: 'Position',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '175px'
  }
]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='font-weight-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='font-weight-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'عکس ترم',
    minWidth: '150px',
    cell: row => {
      return (
        <div>
          <img src={require(`../../../assets/images/my_img/${row.lesson.image}`).default} alt='' 
            style={{maxWidth:"100px", borderRadius:"13px", margin:"7px 0"}}/>
        </div>
      )
    }
  },
  {
    name: 'نام ترم',
    selector: 'title',
    sortable: true,
    minWidth: '80px'
  },
  {
    name: 'نام استاد ',
    selector: 'teacher.fullName',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'توضیحات',
    selector: 'lesson.description',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'هزینه',
    selector: 'cost',
    sortable: true,
    minWidth: '30px'
  },

  {
    name: 'تاریخ شروع',
    selector: row => row.startDate.slice(0, 10),
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'تاریخ پایان',
    selector: row => row.endDate.slice(0, 10),
    sortable: true,
    minWidth: '150px'
  },
  {
    name: ' دانشجویان ',
    selector: 'students.length',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Actions',
    minWidth: '100px',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <Link to={{pathname:"/Edit-courses", state:row}} className="text-dark">
                <DropdownItem  className='w-100' >
                  <FileText size={15} />
                  <span className='align-middle ml-50'>ویرایش</span>
                </DropdownItem>
              </Link>

              <DropdownItem className='w-100' data-tag="allowRowEvents" onClick={async() => {
                await DeleteApi(`http://localhost:5000/api/course/${row._id}`)
                window.location.reload()

              }}>
                <Trash size={15} />
                <span className='align-middle ml-50'>حذف</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

export const lessonColumns = [
  {
    name: 'عکس دوره',
    minWidth: '150px',
    cell: row => {
      return (
        <div>
          <img src={require(`../../../assets/images/my_img/${row.image}`).default} alt='' 
            style={{maxWidth:"100px", borderRadius:"13px", margin:"7px 0"}}/>
        </div>
      )
    }
  },
  {
    name: 'نام دوره',
    selector: 'lessonName',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'هشتگ ها',
    selector: 'topics',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'توضیحات',
    selector: 'description',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'تاریخ شروع',
    selector: row => row.createDate.slice(0, 10),
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'سرفصل مربوط',
    selector: row => (row.category === 7 ? "برنامه نویسی" : "کامپیوتر"),
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Actions',
    minWidth: '150px',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <Link to={{pathname:"/Edit-lesson", state:row}} className="text-dark">
                <DropdownItem className='w-100'>
                  <FileText size={15} />
                  <span className='align-middle ml-50'>ویرایش</span>
                </DropdownItem>
              </Link>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={15} />
                <span className='align-middle ml-50' onClick={async () => {
                  await DeleteApi(`http://localhost:5000/api/lesson/${row._id}`)
                  window.location.reload()

                }}>حذف</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

export const articleColumns = [
  {
    name: 'عکس مقاله',
    minWidth: '150px',
    cell: row => {
      return (
        <div>
          <img src={require(`../../../assets/images/my_img/${row.image}`).default} alt='' 
            style={{maxWidth:"150px", borderRadius:"13px", margin:"7px 0"}}/>
        </div>
      )
    }
  },
  {
    name: 'نام مقاله',
    selector: 'title',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'توضیحات',
    selector: 'text',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'نوع خبر',
    selector: 'category',
    sortable: true,
    minWidth: '50px'
  },
  {
    name: 'Actions',
    minWidth: '150px',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
            <Link  to={{pathname:"/Edit-blog", state:row}} className="text-dark">
              <DropdownItem className='w-100'>
                <FileText size={15} />
                <span className='align-middle ml-50'>ویرایش</span>
              </DropdownItem>
            </Link>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={15} />
                <span className='align-middle ml-50' onClick={async () => {
                  await DeleteApi(`http://localhost:5000/api/news/${row._id}`)
                  window.location.reload()

                }}>حذف</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

export const newscleColumns = [
  {
    name: 'عکس خبر',
    minWidth: '150px',
    cell: row => {
      return (
        <div>
          <img src={require(`../../../assets/images/my_img/${row.image}`).default} alt='' 
            style={{maxWidth:"150px", borderRadius:"13px", margin:"7px 0"}}/>
        </div>
      )
    }
  },
  {
    name: 'نام مقاله',
    selector: 'title',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'توضیحات',
    selector: 'text',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'نوع خبر',
    selector: 'category',
    sortable: true,
    minWidth: '50px'
  },
  {
    name: 'Actions',
    minWidth: '150px',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <Link  to={{pathname:"/Edit-blog", state:row}} className="text-dark">
              <DropdownItem  className='w-100'>
                <FileText size={15} />
                <span className='align-middle ml-50'>ویرایش</span>
              </DropdownItem>
              </Link>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={15} />
                <span className='align-middle ml-50' onClick={async () => {
                  await DeleteApi(`http://localhost:5000/api/news/${row._id}`)
                  window.location.reload()

                }}>حذف</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'نام کاربری',
    selector: 'fullName',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'کدملی',
    selector: 'nationalId',
    sortable: true,
    minWidth: '170px'
  },
  {
    name: 'ایمیل',
    selector: 'email',
    sortable: true,
    minWidth: '230px'
  },
  {
    name: 'نقش',
    selector: 'role',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'شماره ی همراه',
    selector: 'phoneNumber',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: "تعداد دوره ها",
    selector: row => (row.courses.length),
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'وضعیت',
    selector: (row) => (row.isActive ? <button type="button" className="btn btn-success" style={{width:"86px"}} onClick={() => {
      row.role === "student" ? UpdateApi(`http://localhost:5000/api/student/deactive/${row._id}`) : (
        UpdateApi(`http://localhost:5000/api/employee/deactive/${row._id}`)
      )
      window.location.reload()

    }}>فعال</button> : (
      <button type="button" className="btn btn-warning"onClick={() => {
        row.role === "student" ? UpdateApi(`http://localhost:5000/api/student/active/${row._id}`) : (
          UpdateApi(`http://localhost:5000/api/employee/active/${row._id}`)
        )
      window.location.reload()

      }}>غیرفعال</button>)
    ),
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'ویرایش',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
            <Link  to={{pathname: row.role === "student" ? "/Edit-studentInfo" : "/Edit-employeeInfo", state:row}} className="text-dark">
              <DropdownItem className='w-100'>
                <FileText size={15} />
                <span className='align-middle ml-50'>ویرایش</span>
              </DropdownItem>
            </Link>

              <DropdownItem className='w-100'>
                <Trash size={15} />
                <span className='align-middle ml-50' onClick={async () => {
                  row.role === "student" ? await DeleteApi(`http://localhost:5000/api/student/${row._id}`) : (
                    await DeleteApi(`http://localhost:5000/api/employee/${row._id}`)
                  )
                  window.location.reload()
                }} >حذف</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    name: 'Full Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '225px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Position',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Office',
    selector: 'city',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Start Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Post',
    selector: 'post',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'City',
    selector: 'city',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '100px'
  }
]

export default ExpandableTable
