import React, { lazy } from 'react'
import Home from '../views/Home'
// import About from '../views/About'
// import User from '../views/User'
const About = lazy(() => import('../views/About'))
const User = lazy(() => import('../views/User'))
const Page1 = lazy(() => import('../views/Page1'))
const Page2 = lazy(() => import('../views/Page2'))

// 懒加载模式的组件的写法，外面需要套一层 Loading 的提示加载组件
// 重定向组件
import { Navigate } from 'react-router-dom'

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading</div>}>{comp}</React.Suspense>
)

const routes = [
  // 嵌套路由
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
  // {
  //   path: '/home',
  //   element: <Home />,
  // },
  // {
  //   path: '/about',
  //   element: withLoadingComponent(<About />),
  // },
  // {
  //   path: '/user',
  //   element: withLoadingComponent(<User />),
  // },
]

export default routes
