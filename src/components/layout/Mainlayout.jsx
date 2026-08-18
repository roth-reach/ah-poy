import React from 'react'
import Nevbar from './Nevbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Nevbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
