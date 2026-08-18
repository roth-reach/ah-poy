import React from 'react'

function ProductCard({ product }) {
    return (
        <div className='relative group shadow'>
            <div className='overflow-hidden'>
                <div className=''>
                    <img src={product.img?.[0]} alt={product.name} />
                    <p>{product.description}</p>
                    <h3>Price: ${product.price} <span><del>${product.originalprice}</del></span></h3>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
