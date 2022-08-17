import { Circle } from 'react-feather'
export default [
  {
    header: 'مدیریت اعضا'
  },
  {
    id: 'student',
    title: 'بخش دانشجویان',
    icon: <Circle size={12} />,
    badge: "light-danger",
    badgeText: '3',
    children: [
      {
        id: 'add-student',
        title: 'افزودن دانشجو',
        icon: <Circle size={12} />,
        navLink: '/student/add-student'
      },
      {
        id: 'add-remove-term',
        title: 'حذف و اضافه از ترم',
        icon: <Circle size={12} />,
        navLink: '/student/add-remove-term'
      },
      {
        id: 'all-student',
        title: 'لیست کل دانشجویان',
        icon: <Circle size={12} />,
        navLink: '/student/all-student'
      }
    ]
  },
  {
    id: 'employee',
    title: 'بخش کارمندان',
    icon: <Circle size={12} />,
    badge: "light-danger",
    badgeText: '2',
    children: [
      {
        id: 'add-employee',
        title: 'افزودن کارمند',
        icon: <Circle size={12} />,
        navLink: '/employee/add-employee'
      },
      {
        id: 'all-employee',
        title: 'لیست کل کارمندان',
        icon: <Circle size={12} />,
        navLink: '/employee/all-employee'
      }
    ]
  }
]
