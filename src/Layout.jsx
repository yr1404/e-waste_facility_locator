import React from 'react'
import Navbar from './components/navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout