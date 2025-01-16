import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthUser from './components/AuthUser.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/auth_user",
    element: <AuthUser/>
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
