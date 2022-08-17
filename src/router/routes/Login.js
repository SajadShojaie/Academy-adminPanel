import { lazy } from 'react'

export default [
  {
    path: '/Admin-log-in/:userToken',
    component: lazy(() => import('../../views/my-views/Auth/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  }
]