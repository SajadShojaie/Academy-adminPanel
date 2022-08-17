import { lazy } from 'react'

const ControleContent = [
  {
    path: '/courses/add-courses',
    component: lazy(() => import('../../views/my-views/ControleContent/Courses/AddCourses'))
  },
  {
    path: '/courses/all-courses',
    component: lazy(() => import('../../views/my-views/ControleContent/Courses/AllCourses'))
  },
  {
    path: '/lesson/add-lesson',
    component: lazy(() => import('../../views/my-views/ControleContent/Lesson/AddLesson'))
  },
  {
    path: '/lesson/all-lesson',
    component: lazy(() => import('../../views/my-views/ControleContent/Lesson/AllLesson'))
  },
  {
    path: '/blogs/add-blog',
    component: lazy(() => import('../../views/my-views/ControleContent/Blogs/AddBlog'))
  },
  {
    path: '/blogs/all-news',
    component: lazy(() => import('../../views/my-views/ControleContent/Blogs/AllNews'))
  },
  {
    path: '/blogs/all-article',
    component: lazy(() => import('../../views/my-views/ControleContent/Blogs/AllArticle'))
  },
  {
    path: '/comment',
    component: lazy(() => import('../../views/my-views/ControleContent/Comment/Comment'))
  }
]

export default ControleContent
