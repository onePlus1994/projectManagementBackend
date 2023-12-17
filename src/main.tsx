// import React from 'react'
import ReactDOM from 'react-dom/client'
//引入UI样式
import 'antd/dist/reset.css'
//引入全局样式
import '@/assets/style/global.less'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
)
