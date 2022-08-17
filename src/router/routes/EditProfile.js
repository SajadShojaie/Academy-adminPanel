import { lazy } from 'react'

const EditProfile = [
  {
    path: '/EditProfile',
    component: lazy(() => import('../../views/my-views/EditProfile/EditProfile'))
  }
]

export default EditProfile
