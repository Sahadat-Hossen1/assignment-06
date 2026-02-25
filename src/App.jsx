import React from 'react'
import SignUp from './page/SignUp'
import Login from './page/Login'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './page/Home'
import Main from './components/rootLayOut/Main'
import Profile from './page/Profile'
import ProfileProtector from './components/ProtectedRout/ProfileProtector'

const router=createBrowserRouter([
 {
  path:"/",
  element:<Main/>,
  children:[
     {
    path:"/",
    element:<Home/>,
    
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/profile",
    element:<ProfileProtector>
      <Profile/>
    </ProfileProtector>
  },
  ]
 }
])

export default function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}
