import React from 'react'
import AvatarGroup from '@components/avatar-group'
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const avatarGroupData1 = [
  {
    title: 'Lilian',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Alberto',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Bruce',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Diana',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Rey',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'James',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Lee',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Mario',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Oswald',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Christie',
    img: avatar1,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Barnes',
    img: avatar2,
    imgHeight: 26,
    imgWidth: 26
  },
  {
    title: 'Arthur',
    img: avatar3,
    imgHeight: 26,
    imgWidth: 26
  }
]

const TableBasic = ({mydata, handelDelete}) => {
  return (
    <Table responsive hover bordered >
      <thead>
        <tr>
          <th>نام کاربر</th>
          <th>ایمیل کاربر</th>
          <th>متن کامنت</th>
          <th>تاریخ ارسال</th>
          <th>وضعیت</th>
          <th>تغییرات</th>
        </tr>
      </thead>
      <tbody>
        {mydata.map((data) => (
          <tr key={data._id}>
            <td>
              <span className='align-middle font-weight-bold'>{data.username}</span>
            </td>
            <td>{data.email}</td>
            <td>
              {data.comment}
            </td>
            <td style={{minWidth:"150px"}}>
              {data.createDate.slice(0, 10)}                
            </td>
            <td>{data.verified ? <Badge pill color='light-success' className='mr-1'>تایید شده </Badge> : <Badge pill color='light-danger' className='mr-1'>تایید نشده</Badge> }
            </td>
            <td>
              <UncontrolledDropdown>
                <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                  <MoreVertical size={15} />
                </DropdownToggle>
                <DropdownMenu right className="mx-2">
                  <DropdownItem  onClick={e => e.preventDefault()}>
                    <Edit className='mr-50' size={15} /> <span className='align-middle'>پاسخ</span>
                  </DropdownItem>
                  <DropdownItem onClick={() => handelDelete(data)}>
                    <Trash className='mr-50' size={15} /> <span className='align-middle'>حذف</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
        ))}


      </tbody>
    </Table>
  )
}

export default TableBasic
