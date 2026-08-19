import React from 'react'
import { useProduct } from '../context/Productcontext'
import ProductCard from '../components/Products/ProductCard'

function Shoppage() {
  const { 
    selectbrand, 
    setselectbrand, 
    selectCategory, 
    setselectCategory, 
    searchQuery, 
    setSearchQuery,
    sortBy, 
    setSortBy, 
    getFilteredProducts 
  } = useProduct()

  const filteredProducts = getFilteredProducts()

  const brandsList = ['ALL', 'Apple', 'ASUS', 'MSI', 'Lenovo', 'Dell', 'HP', 'Acer', 'Samsung']
  const categoriesList = ['ALL', 'Laptop', 'Smart phone']

  const handleResetFilters = () => {
    setselectbrand('ALL')
    setselectCategory('ALL')
    setSearchQuery('')
    setSortBy('default')
  }

  const hasActiveFilters = selectbrand !== 'ALL' || selectCategory !== 'ALL' || searchQuery !== '' || sortBy !== 'default'

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Explore Catalog</span>
          <h1 className="text-3xl font-black text-white mt-1">Tech & Laptops Store</h1>
          <p className="text-xs text-slate-400 mt-1">
            Browse high performance laptops, workstations, and smartphones with full specs.
          </p>
        </div>

        {/* Search bar inside shop page */}
        <div className="w-full md:w-72">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog..."
              className="w-full bg-white border border-slate-800 text-black text-xs rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-amber-400"
            />
            <svg className="w-4 h-4 text-slate-500 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Filter & Controls Bar */}
      <div className=" border border-slate-800 p-5 rounded-2xl space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Brand Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 max-w-full">
            <span className="text-xs font-bold text-slate-400 shrink-0 mr-1">Brand:</span>
            {brandsList.map((brandName) => (
              <button
                key={brandName}
                onClick={() => setselectbrand(brandName)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition ${
                  selectbrand.toLowerCase() === brandName.toLowerCase()
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : ' text-black hover:bg-gray-300'
                }`}
              >
                {brandName}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold text-black">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className=" border border-slate-800 text-black text-xs font-medium rounded-xl px-3 py-2 focus:outline-none focus:border-amber-400"
            >
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Category Pills & Active Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800/80">
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-black mr-1">Category:</span>
            {categoriesList.map((catName) => (
              <button
                key={catName}
                onClick={() => setselectCategory(catName)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  selectCategory.toLowerCase() === catName.toLowerCase()
                    ? ' text-amber-400 border border-amber-400/40 font-bold'
                    : ' hover:text-gray-300'
                }`}
              >
                {catName === 'ALL' ? 'All Products' : catName}
              </button>
            ))}
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-semibold text-rose-400 hover:text-rose-300 flex items-center gap-1 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-lg transition"
            >
              <span>✕ Reset Filters</span>
            </button>
          )}

        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Showing <strong className="text-white">{filteredProducts.length}</strong> products</span>
        {searchQuery && (
          <span>Search results for "<strong className="text-amber-400">{searchQuery}</strong>"</span>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
          <div className="w-16 h-16 bg-slate-800 text-slate-500 rounded-full flex items-center justify-center mx-auto text-2xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-white">No products found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            We couldn't find any devices matching your filters. Try selecting a different brand or clearing search query.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition"
          >
            Clear All Filters
          </button>
        </div>
      )}

    </div>
  )
}

export default Shoppage
