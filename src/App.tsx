import { useState } from 'react'
// import { Button } from 'antd'
// import 'antd/dist/reset.css'
// import { UpCircleOutlined } from '@ant-design/icons'
import { useRoutes, Link } from 'react-router-dom'
import router from './router'

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
      {/* 站位符组件，类似于窗口，用来展示组件，有点像 vue 里的 router-view */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
