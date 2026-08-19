import React, { useState } from 'react'
import { useProduct } from '../../context/Productcontext'

function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, clearCart, cartSubtotal } = useProduct()
  const [isOrdered, setIsOrdered] = useState(false)

  if (!isCartOpen) return null

  const freeShippingThreshold = 2000
  const progress = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)
  const remainingForFreeShipping = freeShippingThreshold - cartSubtotal

  const handleCheckout = () => {
    setIsOrdered(true)
    setTimeout(() => {
      clearCart()
      setIsOrdered(false)
      setIsCartOpen(false)
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 text-slate-100 shadow-2xl border-l border-slate-800 flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h2 className="text-lg font-bold text-white tracking-wide">Your Shopping Cart</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Free Shipping Indicator */}
          {cart.length > 0 && (
            <div className="bg-slate-800/80 px-5 py-3 border-b border-slate-800">
              <div className="flex justify-between text-xs font-medium mb-1.5">
                {remainingForFreeShipping > 0 ? (
                  <span className="text-slate-300">Add <span className="text-amber-400 font-bold">${remainingForFreeShipping.toFixed(2)}</span> for FREE Express Shipping</span>
                ) : (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Congratulations! You unlocked FREE Express Shipping!
                  </span>
                )}
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-amber-300 h-2 transition-all duration-500 rounded-full" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </div>
          )}

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {isOrdered ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-2 animate-bounce">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Order Confirmed!</h3>
                <p className="text-sm text-slate-400">Thank you for your purchase. Your invoice and tracking details will be sent shortly.</p>
              </div>
            ) : cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-slate-500">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Your cart is empty</h3>
                <p className="text-sm text-slate-400">Looks like you haven't added any tech products yet.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition shadow-lg shadow-amber-500/20 text-sm"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 bg-slate-800/60 border border-slate-800 p-3.5 rounded-2xl hover:border-slate-700 transition">
                  <img 
                    src={product.img?.[0]} 
                    alt={product.name} 
                    className="w-20 h-20 object-cover rounded-xl bg-slate-900 border border-slate-700 shrink-0" 
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-semibold text-white truncate">{product.name}</h4>
                        <button 
                          onClick={() => removeFromCart(product.id)}
                          className="text-slate-400 hover:text-rose-400 p-0.5 rounded transition"
                          title="Remove item"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-amber-400 font-medium">${product.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(product.id, -1)}
                          className="px-2.5 py-1 text-slate-300 hover:bg-slate-800 hover:text-white transition text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-xs font-bold text-white">{quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, 1)}
                          className="px-2.5 py-1 text-slate-300 hover:bg-slate-800 hover:text-white transition text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-bold text-white">
                        ${(product.price * quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && !isOrdered && (
            <div className="p-5 border-t border-slate-800 bg-slate-950 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">${cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-400">
                  <span>Shipping</span>
                  <span className="text-emerald-400 font-semibold">
                    {cartSubtotal >= freeShippingThreshold ? 'FREE' : '$25.00'}
                  </span>
                </div>
                <div className="border-t border-slate-800 pt-2 flex justify-between text-base font-bold text-white">
                  <span>Total</span>
                  <span className="text-amber-400 text-lg">
                    ${(cartSubtotal + (cartSubtotal >= freeShippingThreshold ? 0 : 25)).toLocaleString()}
                  </span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2"
              >
                <span>Checkout Now</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default CartDrawer
