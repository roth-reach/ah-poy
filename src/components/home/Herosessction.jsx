import React from 'react'
import { Link } from 'react-router-dom'

function Herosessction() {
  return (
    <section className="relative overflow-hidden text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-900">

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-amber-400 leading-tight">
              Next-Gen Laptops & Flagship Tech
            </h1>

            <p className="text-base sm:text-lg text-black max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Power up your workflow, creative studio, and gaming performance with top-tier hardware from Apple, ASUS, MSI, Lenovo, and Dell.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                to="/shop" 
                className="px-7 py-3.5 from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold rounded-2xl shadow-xl shadow-amber-500/20 transition hover:-translate-y-0.5 text-sm flex items-center gap-2"
              >
                <span>Shop Catalog</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a 
                href="#flash-deals" 
                className="px-7 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold rounded-2xl transition text-sm flex items-center gap-2"
              >
                <span>View Flash Deals</span>
              </a>
            </div>

           
            
          </div>

        
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 from-amber-500 to-amber-300 rounded-3xl blur-lg opacity-30 animate-pulse" />
              <div className="relative bg-white border border-amber-400 rounded-3xl p-4 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop" 
                  alt="MSI Katana Gaming Laptop"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Herosessction
