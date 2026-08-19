import React from 'react'
import { useProduct } from '../../context/Productcontext'

function ProductCard({ product }) {
  const { addToCart, openQuickView } = useProduct()

  return (
    <div className="group border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between">
      
      
      <div className="relative aspect-4/3  overflow-hidden p-4">
   

        <button
          onClick={() => openQuickView(product)}
          className="absolute top-3 right-3 z-10 bg-slate-900/80 hover:bg-amber-400 hover:text-slate-950 text-slate-200 p-2 rounded-full backdrop-blur-xs transition shadow-md opacity-90 sm:opacity-0 group-hover:opacity-100"
          title="Quick View"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>

        <img 
          src={product.img?.[0]} 
          alt={product.name} 
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition duration-500"
        />
      </div>

     
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
     
          <div className="flex items-center justify-between text-xs">
            <span className="text-amber-400 font-semibold uppercase tracking-wider text-[11px]">{product.brand}</span>
            <span className="text-black font-medium">{product.category}</span>
          </div>

          
          <h3 
            onClick={() => openQuickView(product)}
            className="text-base font-bold text-black group-hover:text-amber-400 transition cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

        
          {product.specification && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded font-medium">
                {product.specification.cpu || product.specification.ram}
              </span>
              <span className="bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded font-medium">
                {product.specification.gpu || product.specification.storage}
              </span>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-red-500">${product.price}</span>
              {product.originalprice && (
                <span className="text-xs text-slate-500 line-through">${product.originalprice}</span>
              )}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-amber-400 mt-0.5">
              <span>★</span>
              <span className="font-bold">{product.rating || 4.8}</span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/10 transition flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add</span>
          </button>
        </div>

      </div>

    </div>
  )
}

export default ProductCard
