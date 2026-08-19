import { createContext, useContext, useState } from 'react'
import { productdata } from '../data/Productdata'

export const ProductContext = createContext({})

export const ProductProvider = ({ children }) => {
  const [product, setproduct] = useState(productdata)
  const [selectbrand, setselectbrand] = useState('ALL')
  const [selectCategory, setselectCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')
  
  // Cart state
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  // Quick View Modal state
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Cart operations
  const addToCart = (itemToAdd, quantity = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.product.id === itemToAdd.id)
      if (existingItemIndex > -1) {
        const newCart = [...prevCart]
        newCart[existingItemIndex].quantity += quantity
        return newCart
      }
      return [...prevCart, { product: itemToAdd, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev)
  }

  const openQuickView = (item) => {
    setSelectedProduct(item)
  }

  const closeQuickView = () => {
    setSelectedProduct(null)
  }

  // Filter & Sort logic
  const getFilteredProducts = () => {
    let filtered = product.filter((item) => {
      const matchBrand = selectbrand === 'ALL' || item.brand.toLowerCase() === selectbrand.toLowerCase()
      const matchCategory = selectCategory === 'ALL' || item.category.toLowerCase() === selectCategory.toLowerCase()
      const matchSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchBrand && matchCategory && matchSearch
    })

    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }

    return filtered
  }

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0)

  return (
    <ProductContext.Provider
      value={{
        product,
        selectCategory,
        selectbrand,
        searchQuery,
        sortBy,
        cart,
        isCartOpen,
        selectedProduct,
        totalCartCount,
        cartSubtotal,
        setproduct,
        setselectCategory,
        setselectbrand,
        setSearchQuery,
        setSortBy,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        setIsCartOpen,
        openQuickView,
        closeQuickView,
        getFilteredProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)