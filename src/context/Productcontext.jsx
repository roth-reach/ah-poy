import { createContext, useContext, useState } from 'react'
import { productdata } from '../data/Productdata'

export const ProductContext = createContext({})

export const ProductProvider = ({ children }) => {
  const [product, setproduct] = useState(productdata)
  const [selectbrand, setselectbrand] = useState('ALL')
  const [selectCategory, setselectCategory] = useState('ALL')

  const filterProduct = () => {
    return product.filter((item) => {
      const brand = selectbrand === 'ALL' || item.brand === selectbrand
      const category = selectCategory === 'ALL' || item.category === selectCategory
      return brand && category
    })
  }

  return (
    <ProductContext.Provider
      value={{
        product,
        selectCategory,
        selectbrand,
        setproduct,
        setselectCategory,
        setselectbrand,
        filterProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)