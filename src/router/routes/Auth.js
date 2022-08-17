import { lazy } from 'react'

export default [
  {
    path: '/Auth/:userData',
    component: lazy(() => import('../../views/my-views/Auth/Auth')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  }
]