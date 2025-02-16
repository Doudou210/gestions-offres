import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './components/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthUser from './components/authUsers/AuthUser.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/auth_user",
    element: <AuthUser/>
  },
  {
    path:"/mes_offres",
    element: <AuthUser/>
  },
  {
    path:"/mes_favoris",
    element: <AuthUser/>
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
