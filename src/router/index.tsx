// Navigate 重定向
import { Navigate } from 'react-router-dom'
import React, { lazy } from 'react'
import Home from '@/views/Home'
const About = lazy(() => import("@/views/About"))

const withLodingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loding...</div>}>
        {comp}
    </React.Suspense>
)
const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: withLodingComponent(<About />)
    },
]
export default routes