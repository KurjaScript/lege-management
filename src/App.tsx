import { useState } from 'react'
// import { Button } from 'antd'
// import 'antd/dist/reset.css'
// import { UpCircleOutlined } from '@ant-design/icons'
import { Outlet, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      {/* 站位符组件，类似于窗口，用来展示组件，有点像 vue 里的 router-view */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
