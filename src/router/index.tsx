import React, { lazy } from 'react'
import Home from '../views/Home'
// import About from '../views/About'
// import User from '../views/User'
const About = lazy(() => import('../views/About'))
const User = lazy(() => import('../views/User'))
// 懒加载模式的组件的写法，外面需要套一层 Loading 的提示加载组件
// 重定向组件
import { Navigate } from 'react-router-dom'

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading</div>}>{comp}</React.Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: withLoadingComponent(<About />),
  },
  {
    path: '/user',
    element: withLoadingComponent(<User />),
  },
]

export default routes
