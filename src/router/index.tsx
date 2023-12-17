// Navigate 重定向
import { Navigate } from 'react-router-dom'
import React, { lazy } from 'react'
import Home from '@/views/Home'
import Login from '@/views/Login'
const About = lazy(() => import("@/views/About"))
const Page1 = lazy(() => import("@/views/Page1"))

const withLodingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loding...</div>}>
    {comp}
  </React.Suspense>
)
const routes = [
  {
    path: "/",
    element: <Navigate to="/about" />
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: withLodingComponent(<About />)
      },
      {
        path: "/page1",
        element: withLodingComponent(<Page1 />)
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <Navigate to="/about" />
  },
]
export default routes