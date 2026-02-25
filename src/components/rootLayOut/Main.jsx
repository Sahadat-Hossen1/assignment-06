import React from 'react'
import Nav from '../Nav'
import { Outlet } from 'react-router'

export default function Main() {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}
