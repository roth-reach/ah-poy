import React from 'react'
import { Outlet } from 'react-router-dom'
import Nevbar from './Nevbar'
import Footer from './Footer'
import CartDrawer from '../cart/CartDrawer'
import ProductDetailModal from '../Products/ProductDetailModal'

function MainLayout() {
  return (
    <div className="min-h-screen text-black font-sans antialiased flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Nevbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      <CartDrawer />
      <ProductDetailModal />
    </div>
  )
}

export default MainLayout
