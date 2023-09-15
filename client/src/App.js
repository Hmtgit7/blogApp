import React from 'react';
import 'style.scss'

import { Login, Register, Single, Write, Home } from 'pages'

import { Navbar, Footer } from 'components';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/posts",
          element: <Single />
        },
        {
          path: "/write",
          element: <Write />
        },
      ]
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]
)

const App = () => {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}



export default App;