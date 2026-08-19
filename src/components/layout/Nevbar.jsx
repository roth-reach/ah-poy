import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useProduct } from '../../context/Productcontext'

function Nevbar() {
  const { totalCartCount, cartSubtotal, toggleCart, searchQuery, setSearchQuery } = useProduct()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (location.pathname !== '/shop') {
      navigate('/shop')
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-amber-400 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
    
          <Link to="/" className="flex items-center gap-3 group shrink-0">
          
            <div className="flex flex-col">
              <h3 className="text-xl font-black tracking-tight text-white group-hover:text-blue-400 transition">
                TechShop
              </h3>
              <span className="text-[10px] uppercase font-bold tracking-widest text-white -mt-1">
                Laptops & Tech Store
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search laptops, Apple, RTX 4070, phones..."
                className="w-full bg-white border border-slate-800 text-slate-800 text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition placeholder:text-slate-500"
              />
              <svg className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </form>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <Link 
              to="/" 
              className={`transition hover:text-blue-500 ${location.pathname === '/' ? 'text-white font-bold' : 'text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`transition hover:text-blue-500 ${location.pathname === '/shop' ? 'text-amber-400 font-bold' : 'text-white'}`}
            >
              Shop Catalog
            </Link>
          </nav>

          {/* Actions & Cart button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="relative bg-white border border-slate-800 hover:border-blue-500 text-black px-4 py-2.5 rounded-xl transition flex items-center gap-3 group"
            >
              <div className="relative">
                <svg className="w-5 h-5 text-amber-400 group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalCartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-950 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                    {totalCartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[10px] text-slate-800 uppercase font-semibold leading-none">Cart</span>
                <span className="text-xs font-bold text-black leading-tight">${cartSubtotal.toLocaleString()}</span>
              </div>
            </button>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800 space-y-4">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search laptops & smartphones..."
                className="w-full bg-slate-900 border border-slate-800 text-white text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-amber-400"
              />
            </form>
            <div className="flex flex-col space-y-2 text-sm font-medium">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-200"
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-200"
              >
                Shop Catalog
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}

export default Nevbar
