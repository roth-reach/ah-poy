import React from 'react'
import { useProduct } from '../context/Productcontext'
import ProductCard from '../components/Products/ProductCard';
import nevbar from '../components/layout/Nevbar';
function HomePage() {
  const { product } = useProduct();

  return (
    

    <div className='m-0 p-0 relative'>
      <nevbar/>
        <div className='m-auto w-7xl'>
              <div className='grid md:gride-col-3 lg:grid-cols-4 sm:grid-col-2 gap-4'>
                  {product?.map((item) => (
                    <ProductCard key={item.id} product={item}/>
                  ))}
              </div>
        </div>
    </div>
  )
}

export default HomePage
