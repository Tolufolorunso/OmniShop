import React from 'react'
import { ProductItem } from './TopNewArrivalComponent'
import { products } from '@/data/products'

function RecommendedComponent() {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Recommended For you
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default RecommendedComponent
