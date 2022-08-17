import { PieChart, Circle, Map } from "react-feather"
export default [
  {
    header: "مدیریت محتوا"
  },
  {
    id: "courses",
    title: "ترم ها",
    badge: "light-danger",
    badgeText: '2',
    icon: <PieChart size={20} />,
    children: [
      {
        id: "add-courses",
        title: "افزودن ترم",
        icon: <Circle size={12} />,
        navLink: "/courses/add-courses"
      },
      {
        id: "all-courses",
        title: "لیست کل ترم ها",
        icon: <Circle size={12} />,
        navLink: "/courses/all-courses"
      }
    ]
  },
  {
    id: "lesson",
    title: "دوره ها",
    badge: "light-danger",
    badgeText: '2',
    icon: <Map size={20} />,
    children: [
      {
        id: "add-lesson",
        title: "افزودن دوره",
        icon: <Circle size={12} />,
        navLink: "/lesson/add-lesson"
      },
      {
        id: "all-lesson",
        title: "لیست کل دوره ها",
        icon: <Circle size={12} />,
        navLink: "/lesson/all-lesson"
      }
    ]
  },
  {
    id: "blogs",
    title: " اخبار و مقالات ",
    icon: <Map size={20} />,
    badge: "light-danger",
    badgeText: '3',
    children: [
      {
        id: "add-blogs",
        title: "افزودن اخبار و مقالات",
        icon: <Circle size={12} />,
        navLink: "/blogs/add-blog"
      },
      {
        id: "all-news",
        title: "لیست کل اخبار ",
        icon: <Circle size={12} />,
        navLink: "/blogs/all-news"
      },
      {
        id: "all-article",
        title: "لیست کل مقالات ",
        icon: <Circle size={12} />,
        navLink: "/blogs/all-article"
      }
    ]
  },
  {
    id: "comment",
    title: "مدیریت کامنت ها",
    icon: <Map size={20} />,
    badge: "light-danger",
    navLink: "/comment"
  }
]
