import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard/MyDashboard/MyDashboard'))
  }
]

export default DashboardRoutes
