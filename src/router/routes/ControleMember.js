import { lazy } from 'react'

const ControleMember = [
  {
    path: '/student/add-student',
    component: lazy(() => import('../../views/my-views/ControleMember/AddStudent'))
  },
  {
    path: '/student/add-remove-term',
    component: lazy(() => import('../../views/my-views/ControleMember/AddRemoveStudent'))
  },
  {
    path: '/student/all-student',
    component: lazy(() => import('../../views/my-views/ControleMember/AllStudent'))
  },
  {
    path: '/employee/add-employee',
    component: lazy(() => import('../../views/my-views/ControleMember/AddEmployee'))
  },
  {
    path: '/employee/all-employee',
    component: lazy(() => import('../../views/my-views/ControleMember/AllEmployee'))
  }
]

export default ControleMember
