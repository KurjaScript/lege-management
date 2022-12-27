import { useState } from 'react'
import { Button } from 'antd'
// import 'antd/dist/reset.css'
import { UpCircleOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* 顶级组件
      <Button type="primary">我们的按钮</Button>
      <UpCircleOutlined
        style={{ fontSize: '40px', color: 'red' }}></UpCircleOutlined> */}
      {/* 站位符组件，类似于窗口，用来展示组件，有点像 vue 里的 router-view */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
