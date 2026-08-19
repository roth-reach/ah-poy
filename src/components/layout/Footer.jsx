import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-amber-400 border-t border-slate-800 text-white py-12 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
        
          <div className="space-y-4 md:col-span-1">
            <p className="text-xs text-white leading-relaxed">
              Your premier store for high-performance gaming laptops, creator workstations, and flagship smartphones.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Shop</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/shop" className="hover:text-blue-400 transition">Gaming Laptops</Link></li>
              <li><Link to="/shop" className="hover:text-blue-400 transition">Apple MacBooks</Link></li>
              <li><Link to="/shop" className="hover:text-blue-400 transition">Flagship Smartphones</Link></li>
              <li><Link to="/shop" className="hover:text-blue-400 transition">Flash Sales</Link></li>
            </ul>
          </div>

        
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support & Help</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-blue-400 transition">Order Tracking</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Return & Exchange Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Tech Support 24/7</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Warranty Registration</a></li>
            </ul>
          </div>

     
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-white">Subscribe for exclusive flash deals and tech releases.</p>
          </div>

        </div>

        
        <div className="pt-8 border-t border-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Ah poy. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white">
            <span>Visa</span>
            <span>MasterCard</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
