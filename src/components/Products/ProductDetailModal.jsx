import React, { useState } from 'react'
import { useProduct } from '../../context/Productcontext'

function ProductDetailModal() {
  const { selectedProduct, closeQuickView, addToCart } = useProduct()
  const [selectedImgIndex, setSelectedImgIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!selectedProduct) return null

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity)
    closeQuickView()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">

      <div 
        className="fixed inset-0 backdrop-blur-sm transition-opacity"
        onClick={closeQuickView}
      />

      <div className="min-h-screen px-4 flex items-center justify-center py-10">
        <div className="relative bg-black text-black rounded-3xl border border-slate-800 shadow-2xl max-w-3xl w-full overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Close button */}
          <button 
            onClick={closeQuickView}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 p-2 rounded-full z-20 transition"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-8 gap-8">
            
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center p-4">
                <img 
                  src={selectedProduct.img?.[selectedImgIndex] || selectedProduct.img?.[0]} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Thumbnail selector */}
              {selectedProduct.img && selectedProduct.img.length > 1 && (
                <div className="flex gap-3">
                  {selectedProduct.img.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`w-16 h-16 rounded-xl border overflow-hidden p-1 bg-slate-950 transition ${
                        selectedImgIndex === idx ? 'border-amber-400 ring-2 ring-amber-400/30' : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt="" className="w-full h-full object-cover rounded-lg" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full">
                    {selectedProduct.brand}
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-semibold rounded-full">
                    {selectedProduct.category}
                  </span>
                  {selectedProduct.flashsale && (
                    <span className="px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full animate-pulse">
                      🔥 Flash Sale
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white leading-tight">{selectedProduct.name}</h2>

                {/* Rating */}
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex text-amber-400">
                    {'★'.repeat(Math.floor(selectedProduct.rating || 5))}
                  </div>
                  <span className="text-slate-300 font-bold">{selectedProduct.rating || 4.8}</span>
                  <span className="text-slate-500">({selectedProduct.reviewsCount || 100} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-amber-400">${selectedProduct.price}</span>
                  {selectedProduct.originalprice && (
                    <span className="text-lg text-slate-500 line-through">${selectedProduct.originalprice}</span>
                  )}
                  {selectedProduct.originalprice && (
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold">
                      Save ${(selectedProduct.originalprice - selectedProduct.price).toFixed(0)}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">{selectedProduct.description}</p>

                {/* Specs Grid */}
                {selectedProduct.specification && (
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-4 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Specifications</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(selectedProduct.specification).map(([key, val]) => (
                        <div key={key} className="flex flex-col">
                          <span className="text-slate-500 capitalize">{key}</span>
                          <span className="font-semibold text-slate-200">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-slate-400">Quantity:</span>
                  <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-slate-300 hover:bg-slate-800 font-bold transition text-sm"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-sm font-bold text-white">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-slate-300 hover:bg-slate-800 font-bold transition text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold rounded-2xl shadow-xl shadow-amber-500/20 transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Add to Cart - ${(selectedProduct.price * quantity).toLocaleString()}</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetailModal
