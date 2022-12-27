import { useState } from 'react'
import { Button } from 'antd'
// import 'antd/dist/reset.css'
import { UpCircleOutlined } from '@ant-design/icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      顶级组件
      <Button type="primary">我们的按钮</Button>
      <UpCircleOutlined
        style={{ fontSize: '40px', color: 'red' }}></UpCircleOutlined>
    </div>
  )
}

export default App
