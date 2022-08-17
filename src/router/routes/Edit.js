import { lazy } from 'react'

const Edit = [
  {
    path: '/Edit-courses',
    component: lazy(() => import('../../views/my-views/Edit/EditCourses'))
  },
  {
    path: '/Edit-lesson',
    component: lazy(() => import('../../views/my-views/Edit/EditLesson'))
  },
  {
    path: '/Edit-blog',
    component: lazy(() => import('../../views/my-views/Edit/EditBlog'))
  },
  {
    path: '/Edit-studentInfo',
    component: lazy(() => import('../../views/my-views/Edit/editStudent'))
  },
  {
    path: '/Edit-employeeInfo',
    component: lazy(() => import('../../views/my-views/Edit/editEmployee'))
  }
]

export default Edit
