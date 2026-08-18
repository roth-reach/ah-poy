import React, { useState } from 'react'
import { productdata } from '../data/Productdata'
import ProductCard from '../components/Products/ProductCard'

function Shoppage() {
  const [product] = useState(productdata)
  const [selectbrand, setselectbrand] = useState('ALL')
  const [selectcategory, setselectcategory] = useState('ALL')

  const filterproduct = product.filter((item) => {
    const Brand = selectbrand === 'ALL' || item.brand === selectbrand
    const Category = selectcategory === 'ALL' || item.category === selectcategory
    return Brand && Category
  })

  return (
    <div className='mt-10 m-auto w-7xl px-4'>
        <div>
            <input type="ra" />
        </div>
      <div className='mb-6 flex flex-wrap gap-4'>
        <select
          value={selectbrand}
          onChange={(e) => setselectbrand(e.target.value)}
          className='border p-2 rounded'
        >
          <option value='ALL'>ALL</option>
          <option value='ASUS'>ASUS</option>
          <option value='Apple'>Apple</option>
          <option value='Acer'>Acer</option>
          <option value='Lenovo'>Lenovo</option>
        </select>

        <select
          value={selectcategory}
          onChange={(e) => setselectcategory(e.target.value)}
          className='border p-2 rounded'
        >
          <option value='ALL'>ALL category</option>
          <option value='Laptop'>Laptop</option>
          <option value='Smart phone'>Smart phone</option>
        </select>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {filterproduct.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default Shoppage
