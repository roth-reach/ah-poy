import React from 'react'
import { useProduct } from '../../context/Productcontext'
import ProductCard from '../Products/ProductCard'
import { Link } from 'react-router-dom'

function Feature() {
  const { product, setselectbrand, setselectCategory } = useProduct()

  const flashSaleProducts = product.filter((p) => p.flashsale)
  const bestSellerProducts = product.filter((p) => p.bestseller)

  const brands = [
    { name: 'Apple', icon: '' },
    { name: 'ASUS', icon: '' },
    { name: 'MSI', icon: '' },
    { name: 'Lenovo', icon: '' },
    { name: 'Dell', icon: '' },
    { name: 'HP', icon: '' },
    { name: 'Acer', icon: '' },
    { name: 'Samsung', icon: '' },
  ]

  return (
    <div className="space-y-16 py-12">
      

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Official Brand Partners</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((b) => (
            <Link
              key={b.name}
              to="/shop"
              onClick={() => setselectbrand(b.name)}
              className="bg-amber-500 hover:border-amber-500 rounded-xl p-3.5 flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition text-white hover:text-white"
            >
              <span className="text-xl">{b.icon}</span>
              <span className="text-xs font-bold">{b.name}</span>
            </Link>
          ))}
        </div>
      </section>


      <section id="flash-deals" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" from-rose-950/40 via-slate-900 to-slate-900 border border-rose-900/30 rounded-3xl p-6 sm:p-8 space-y-6">
          
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellerProducts.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between h-64 group">
            <img 
              src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop" 
              alt="Gaming Laptops" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-700" 
            />
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">High Performance</span>
              <h3 className="text-2xl font-black text-white">Gaming Laptops & RTX 4070</h3>
              <p className="text-xs text-slate-300 max-w-xs">Equipped with high refresh displays & ray-tracing graphics.</p>
            </div>
            <div className="relative z-10">
              <Link 
                to="/shop" 
                onClick={() => setselectCategory('Laptop')}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl transition"
              >
                <span>Shop Laptops</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between h-64 group">
            <img 
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop" 
              alt="Smartphones" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-700" 
            />
            <div className="relative z-10 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Mobile Innovation</span>
              <h3 className="text-2xl font-black text-white">Flagship Smartphones</h3>
              <p className="text-xs text-slate-300 max-w-xs">iPhone 15 Pro Max, Galaxy S24 Ultra & ROG Phone 8.</p>
            </div>
            <div className="relative z-10">
              <Link 
                to="/shop" 
                onClick={() => setselectCategory('Smart phone')}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl transition"
              >
                <span>Shop Phones</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Feature
